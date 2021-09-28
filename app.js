var buttonSelector = document.querySelector('#btn-translate');
var inputSelector = document.querySelector('#inputText');
var outputSelector = document.querySelector('#output');
var url = 'https://api.funtranslations.com/translate/minion.json';

function urlProcessor() {
  var inputText = inputSelector.value;
  return (inputString = url + '?' + 'text=' + inputText);
}
function inputHandler() {
  var url = urlProcessor();
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputSelector.innerHTML = translatedText;
    })
    .catch((error) => console.log(error));
}
buttonSelector.addEventListener('click', inputHandler);
