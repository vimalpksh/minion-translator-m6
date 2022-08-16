// var username = prompt("Whats your name?");
// alert("Welcome " + username);
var textInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something went wrong with server, Try again later");
}

function clickHandler() {
  var inpText = textInput.value;

  fetch(constructURL(inpText))
    .then((response) => response.json())
    .then((json) => {
      var finalOutput = json.contents.translated;
      outputBox.innerText = finalOutput;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
