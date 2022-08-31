/*
    Esse grupo de métodos são responsáveis por 
    fornecer as funcionalidades de interface (HTML).
*/

const enableDisableButton = (buttonId, state) => {
  let button = document.getElementById(buttonId);
  if (button) {
    button.disabled = !state;
  }
};

const changeRandom = () => {
  pokemonRandon = !pokemonRandon;
};

const changeAutomatic = () => {
  pokemonGetAutomatic = !pokemonGetAutomatic;
};

const clearPokemons = () => {
  pokemonSequence = 1;
  removeFromLocalStorage("pokemonSequence");
  removeFromLocalStorage("pokemons");
  clearLocalStorage();
  document.getElementById("rowPokemons").innerHTML = "";
  renderPokemons();
};

const sortPokemons = () => {
  let pokemons = getFromLocalstorage("pokemons");
  /*
  pokemons = pokemons.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );
  */
  pokemons.sort((p1, p2) => {
    return p2.id - p1.id;
  });
  saveInLocalstorage("pokemons", JSON.stringify(pokemons));

  renderPokemons();
};

const loadNewPokemon = () => {
  let pokemonId = getPokemonId();
  if (!pokemonId) {
    return;
  }

  enableDisableButton("getNewPokemonBtn", false);

  let pathPokemonAPI = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  fetch(pathPokemonAPI, requestOptions)
    .then(responseHandler)
    .then(resultHandler)
    .catch(errorHandler);
};

const renderPokemon = (pokemon, animate) => {
  let typesHtml = "";
  pokemon.types.forEach((type) => {
    const translated = translateKey(`type-` + type.type.name);
    typesHtml += `<li class="list-group-item"><a href="${type.type.url}" class="card-link" target="_blank"><span data-translate="type-${type.type.name}">${translated}</span></a></li>`;
  });

  const cardTemplate = `
        <div class="col-md-2 text-center pokemon">
            <div id="cardPokemon${pokemon.id}" class="card mb-3 ${
    animate ? "animate__animated animate__flipInY" : ""
  }">
                <div class="row g-0">
                    <div class="name">#${pokemon.id}</div>
                    <div class="speech">
                        <i class="bi bi-volume-up-fill" style="cursor: pointer;"
                            onclick='speechPokemon("${pokemon.name}");'></i>
                    </div>
                    <div class="col-md-4 photo">
                        <img src="${
                          pokemon.sprites.front_default
                        }" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.name}</h5>
                            <p class="card-text">
                            <ul class="list-group list-group-flush">
                                ${typesHtml}
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  let rowPokemons = document.getElementById("rowPokemons");
  rowPokemons.innerHTML = cardTemplate + rowPokemons.innerHTML;

  const timerPokemon = setTimeout(() => {
    document.getElementById(`cardPokemon${pokemon.id}`).className = "card mb-3";
    clearTimeout(timerPokemon);
  }, 1200);
};

const changeLanguage = (selectObject) => {
  var value = selectObject.value;
  if (value !== currentLanguage) {
    currentLanguage = value;
    changeLanguagei18n(value);
    /*
        document.querySelectorAll('[data-type]').forEach((element) => {
            element.innerText = translateKey(element.attributes['data-type'].value);
        });
        */
  }
};
