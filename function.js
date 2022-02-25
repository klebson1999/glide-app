// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


function fun() {
// Para cada parâmetro, contém seu `.value` ou seu valor no tipo que você declarou, ou é `indefinido`.
// Este é um bom lugar para extrai os `.value`s e atribui os valores padrão.

var data_inicial = new Date("02/22/2022"); 
var data_futuro = new Date("10/05/2022");

var diferenca = Math.abs(data_futuro-data_inicial);

dias = diferenca/(1000 * 86400)
semanas = diferenca/(1000 * 3600 * 24 * 7)
meses = diferenca/(1000 * 3600 * 24 * 7)
console.log(dias)
}
