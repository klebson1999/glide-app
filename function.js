// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


window.function = function (inicial, final, retorno) {
// Para cada parâmetro, contém seu `.value` ou seu valor no tipo que você declarou, ou é `indefinido`.
// Este é um bom lugar para extrai os `.value`s e atribui os valores padrão.

  inicial = inicial.value ?? "";
  final = final.value ?? 0;
  retorno = retorno.value ?? "";
  resultado_final = "";
  resultado_final = final.subtract(inicial);

  

  return resultado_final;
}
