// arquivos exportados
import { calculate } from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"
// varieveis de todos os input
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
document.querySelectorAll(".charKey").addEventListener("click", handleButtonPress)
// funcionalidade para everto de limpar e para dar o resultado do calculo
document.getElementById("clear").addEventListener("click", handleClearButton)
// evento para travar o que o usuario digitar
document.getElementById("input").addEventListener("keydown", handleTyping)
// funcionalidade para ser calculado os valores
document.getElementById("equal").addEventListener("click", calculate)
// funcionalidade para o evento de copiar ou copiado
document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard)
// funcionalidade para Alterar a cor dos objetos
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)