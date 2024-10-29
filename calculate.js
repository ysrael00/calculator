// funcionalidade para dar erro para o usuario e mostrar de forma grafica
export default function calculate() {
    const resultInput = document.querySelector("#result")
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    // ter muito cuidado com a funçao eval, pois ela pode executar qualquer codigo js, inclusive codigos maliciosos, porem o eval ele vai avaliar os valores, e calcular de forma automatica
    const result = eval(input.value)
    resultInput.value = result
    // para evitar que mostre sempre os erros pro usuario, e ele era limpar essa classe para nao pintar de vermelho
    resultInput.classList.remove("error")
  }