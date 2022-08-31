/*
    Esse grupo de variáveis e métodos são responsáveis por 
    fornecer o mecanismo de leitura do nome dos Pokemons.
*/

const msg = new SpeechSynthesisUtterance();
const voices = window.speechSynthesis.getVoices();

const speechInitialization = () => {
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
};

const speechPokemon = (textToSpeech) => {
  const select = document.getElementById("languageSelect");
  const language = select.options[select.selectedIndex].value;

  msg.voice = voices[33];
  msg.lang = language;

  if (language === "pt-BR") {
    msg.voice = voices[3];
  }
  if (language === "it-IT") {
    msg.voice = voices[21];
  }
  if (language === "es-ES") {
    msg.voice = voices[29];
  }

  msg.text = textToSpeech;
  speechSynthesis.speak(msg);
};

speechInitialization();
