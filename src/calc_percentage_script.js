var numberToCalc = document.getElementById('input-first-number');
var percentageNumber = document.getElementById('input-percentage-number');

var resultsPar = document.getElementById('results-paragraph');

function calcPercentage() {
    var values = {
        numberInputValue: Number(numberToCalc.value),
        percentageInputValue: Number(percentageNumber.value)
    };

    var results = (values.percentageInputValue * values.numberInputValue) / 100;
    resultsPar.innerHTML = `Resultados: ${results}.`
}