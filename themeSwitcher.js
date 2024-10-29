// funcionalidade para Alterar a cor dos objetos
export default function () {
    // se for dark, ele ira pegar todas essas cores
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#FF0000")
      main.dataset.theme = "light"
    // se for claro, ira pegar todas essas cores
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#FF0000")
      main.dataset.theme = "dark"
    }
  }