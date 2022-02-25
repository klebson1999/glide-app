// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


window.function = function (inicial, final, retorno) {
// Para cada parâmetro, contém seu `.value` ou seu valor no tipo que você declarou, ou é `indefinido`.
// Este é um bom lugar para extrai os `.value`s e atribui os valores padrão.

const vinicial = new Date(inicial); // Data de hoje
const vfuture = new Date(final); // Outra data no passado
const diff = Math.abs(vfuture.getTime() - vinicial.getTime() ); // Subtrai uma data pela outra
const mounth = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
return(mounth);

}
