/*
    Esse grupo de métodos são responsáveis por
    realizar a integração com a API PokeAPI e tratar as respostas da API.
*/

const responseHandler = (response) => {
    return response.text();
}

const resultHandler = (result) => {
    // localStorage.clear();
    adjustsPokemonSequence();
    let pokemon = JSON.parse(result);
    pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprites: pokemon.sprites.other['official-artwork']
    };
    let pokemons = getFromLocalstorage('pokemons');
    // console.dir(pokemons);
    pokemons = [pokemon].concat(!pokemons ? [] : (pokemons));
    pokemons = pokemons.filter((value, index) => pokemons.indexOf(value) == index);
    saveInLocalstorage('pokemons', JSON.stringify(pokemons));
    speechPokemon(pokemon.name);
    renderPokemon(pokemon, true);
    enableDisableButton('getNewPokemonBtn', true);
}

const errorHandler = (error) => {
    console.log('error', error);
    enableDisableButton('getNewPokemonBtn', true);
}

