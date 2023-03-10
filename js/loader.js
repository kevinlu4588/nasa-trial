

// dummy url
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function fetchHandler(event) {
    displayLoading()
    var input = textInput.value;
    var finalURL = buildURL(input);

    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            hideLoading()
            textOutput.innerText = json.contents.translated;
        })
}
// creating url format
// we need 
// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="your input"

function buildURL(inputData) {
    return `${url}?text=${inputData}`;
}