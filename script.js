function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light-2.png')
    // se tiver light mode, adicionar legenda no alt
    img.setAttribute('alt', 'Foto de perfil da Michele com fundo colorido')
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
      //se tiver sem light mode, adicionar legenda no alto
      img.setAttribute('alt', 'Foto de perfil da Michele com fundo laranja')
  }
}
  