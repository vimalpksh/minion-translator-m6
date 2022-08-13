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
// function clickHandler() {
//   var inputText = textInput.value;

//   fetch(constructURL(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedText = json.contents.translated;
//       outputBox.innerText = translatedText;
//     });
// }
// btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  var inpText = textInput.value;

  fetch(constructURL(inpText))
    .then((response) => response.json())
    .then((json) => {
      var finalOutput = json.contents.translated;
      outputBox.innerText = finalOutput;
    });
}
btnTranslate.addEventListener("click", clickHandler);

// function getTranslationURL(input) {
//   return serverURL + "?" + "text=" + input;
// }

// // function errorHandler(error) {
// //   console.log("error occured", error);
// //   alert("something wrong with server! try again after some time");
// // }

// function clickHandler() {
//   var inputText = textInput.value; // taking input

//   // calling server for processing
//   fetch(getTranslationURL(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       var translatedText = json.contents.translated;
//       outputBox.innerText = translatedText; // output
//     });
//   // .catch(errorHandler);
// }

// btnTranslate.addEventListener("click", clickHandler);
