function inverterString(string) {
    var invertedString = '';
    for (var i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

var entrada = prompt("Digite uma string:");
var resultado = inverterString(entrada);
console.log("String invertida:", resultado);