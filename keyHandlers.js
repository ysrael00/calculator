import { calculate } from "./calculate.js"
const input = document.querySelector("#input")
export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    input.value += value
  }
  export function handleClearButton() {
    input.value = ""
    // focus serve para limpar e voltar a digitar os valores
    input.focus()
  }
// evento para travar o que o usuario digitar
  export function handleTyping(ev) {
    ev.preventDefault()
   // trava para o usuario so digitar esses caracteres
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    // permissao para o usuario apagar e dar enter
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
  }