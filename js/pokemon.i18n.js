// import i18next from 'i18next';

const changeLanguagei18n = (lng) => {
    i18next.changeLanguage(lng);
}

const translateKey = (key) => {
    return i18next.t(key);
}


const updateLanguageKeys = () => {
    document.querySelectorAll('[data-translate]').forEach((element) => {
        element.innerText = translateKey(element.attributes['data-translate'].value);
    });
}

i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            'en-US': {
                translation: {
                    'language': 'English',
                    'app-name': 'Pokemons List',
                    'type-normal': 'Normal',
                    'type-fighting': 'Fighting',
                    'type-flying': 'Flying',
                    'type-poison': 'Poison',
                    'type-ground': 'Ground',
                    'type-rock': 'Rock',
                    'type-bug': 'Bug',
                    'type-ghost': 'Ghost',
                    'type-steel': 'Steel',
                    'type-fire': 'Fire',
                    'type-water': 'Water',
                    'type-grass': 'Grass',
                    'type-electric': 'Electric',
                    'type-psychic': 'Psychic',
                    'type-ice': 'Ice',
                    'type-dragon': 'Dragon',
                    'type-dark': 'Dark',
                    'type-fairy': 'Fairy'
                }
            },
            'pt-BR': {
                translation: {
                    'language': 'Português',
                    'app-name': 'Lista de Pokémons',
                    'type-normal': 'Normal',
                    'type-fighting': 'Lutador',
                    'type-flying': 'Voador',
                    'type-poison': 'Venenoso',
                    'type-ground': 'Terrestre',
                    'type-rock': 'Pedra',
                    'type-bug': 'Inseto',
                    'type-ghost': 'Fantasma',
                    'type-steel': 'Aço',
                    'type-fire': 'Fogo',
                    'type-water': 'Água',
                    'type-grass': 'Planta',
                    'type-electric': 'Elétrico',
                    'type-psychic': 'Psíquico',
                    'type-ice': 'Gelo',
                    'type-dragon': 'Dragão',
                    'type-dark': 'Sombrio',
                    'type-fairy': 'Fada'
                }
            },
            'es-ES': {
                translation: {
                    'language': 'Spanish',
                    'app-name': 'Lista de Pokémon',
                    'type-normal': 'Normal',
                    'type-fighting': 'Lucha',
                    'type-flying': 'Volador',
                    'type-poison': 'Veneno',
                    'type-ground': 'Terrestre',
                    'type-rock': 'Roca',
                    'type-bug': 'Insecto',
                    'type-ghost': 'Fantasma',
                    'type-steel': 'Acero',
                    'type-fire': 'Fuego',
                    'type-water': 'Agua',
                    'type-grass': 'Césped',
                    'type-electric': 'Eléctrico',
                    'type-psychic': 'Psíquico',
                    'type-ice': 'Hielo',
                    'type-dragon': 'Continuar',
                    'type-dark': 'Oscuro',
                    'type-fairy': 'Hada'
                }
            },
            'it-IT': {
                translation: {
                    'language': 'Italiano',
                    'app-name': 'Elenco dei Pokemon',
                    'type-normal': 'Normale',
                    'type-fighting': 'Battagliero',
                    'type-flying': 'Volare',
                    'type-poison': 'Veleno',
                    'type-ground': 'Terra',
                    'type-rock': 'Roccia',
                    'type-bug': 'Insetto',
                    'type-ghost': 'Fantasma',
                    'type-steel': 'Acciaio',
                    'type-fire': 'Fuoco',
                    'type-water': 'Acqua',
                    'type-grass': 'Erba',
                    'type-electric': 'Elettrico',
                    'type-psychic': 'Psichico',
                    'type-ice': 'Ghiaccio',
                    'type-dragon': 'Drago',
                    'type-dark': 'Scuro',
                    'type-fairy': 'Fata'
                }
            }
        }
    }, function (err, t) {
        updateLanguageKeys();
    });


i18next.on('languageChanged', () => {
    updateLanguageKeys();
});
