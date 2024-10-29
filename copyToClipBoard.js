// funcionalidade para o evento de copiar ou copiado
export default function (ev) {
    const button = ev.currentTarget
    // se ele for igual a copiar, ele nao sera copiado
    if (button.innerText === "Copiar") {
      button.innerText = "Copiado!"
      button.classList.add("success")
      navigator.clipboard.writeText(document.querySelector("#result")('#result').value)
      // entretanto se ele ja tiver copiado com sucesso, ja ira sumir o botao de sucesso
    } else {
      button.innerText = "Copiado"
      button.classList.remove("success")
    }
  }