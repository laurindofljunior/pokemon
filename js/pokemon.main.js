/*
    Javascript Principal da Aplicação List Pokemon
*/

// Constants
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const MAX_POKEMON_ID = 905;

// Variables
let pokemonRandon = false;
let pokemonSequence = 1;
let pokemonGetAutomatic = false;
let currentLanguage = 'pt-BR';

// Methods
const init = () => {
    prepareToGetAutomatic();
    renderPokemons(true);
    changeLanguagei18n('pt-BR');
}

const adjustsPokemonSequence = () => {
    if (!pokemonRandon) {
        pokemonSequence++;
        saveInLocalstorage("pokemonSequence", pokemonSequence);
    }
}

const getPokemonId = () => {
    let pokemonSequenceStorage = getFromLocalstorage("pokemonSequence");
    if (pokemonSequenceStorage) {
        pokemonSequence = pokemonSequenceStorage;
    }

    let pokemonId = pokemonSequence;
    if (pokemonRandon) {
        let pokeRandom = parseInt(Math.random() * MAX_POKEMON_ID);
        pokemonId = pokeRandom;
    }

    if (pokemonId > MAX_POKEMON_ID) {
        return null;
    }

    return pokemonId;
}

const renderPokemons = () => {
    const pokemons = getFromLocalstorage('pokemons');
    if (!pokemons) {
        return;
    }

    document.getElementById("rowPokemons").innerHTML = '';
    pokemons.forEach((pokemon, pokemonIndex) => {
        renderPokemon(pokemon, false);
    });

}

const prepareToGetAutomatic = () => {
    setInterval(() => {
        if (pokemonGetAutomatic) {
            loadNewPokemon();
        }
    }, 2000);
}

init();