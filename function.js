// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


window.function = function (inicial, final, retorno) {
// Para cada parâmetro, contém seu `.value` ou seu valor no tipo que você declarou, ou é `indefinido`.
// Este é um bom lugar para extrai os `.value`s e atribui os valores padrão.

  data = new Date(inicial);
  final = final.value ?? "";
  retorno = retorno.value ?? "";
  resultado_final = data.subtract(10, 'days');

  

  return resultado_final;
}
