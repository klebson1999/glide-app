// A função aqui pega os parâmetros que você declarou no arquivo `glide.json`, na mesma ordem.


window.function = function (data_inicial, data_final, formatacao_retorno) {
// Para cada parâmetro, contém seu `.value` ou seu valor no tipo que você declarou, ou é `indefinido`.
// Este é um bom lugar para extrai os `.value`s e atribui os valores padrão.

  data_inicial = moment().format(data_inicial.value ?? "");
  data_final = moment().format(data_final.value ?? 0);
  formatacao_retorno = formatacao_retorno.value;

  

  return str.substring(start, end);
}
