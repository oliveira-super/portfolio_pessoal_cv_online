//          Variaveis globais
const content = document.getElementById('content')

const menuItens = document.querySelectorAll('#menu li')

const tema = document.getElementById("tema-header")  

const  toggleButton = document.getElementById("toggle-button")

const toggle = document.querySelectorAll('.fa-sun, .fa-moon, #toggle-button')
toggleTema = false

const botaoForm = document.getElementById('botao-form')

// Trocar tema
//          Capturar o clique do botao tema
//          e mudar conforme o valor booleano
toggle.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleTema = !toggleTema
    if (tema.getAttribute("href").includes("light.css")) {
      console.log("Trocando para dark")
      tema.setAttribute("href", "assets/style/temas/dark.css")
  
      //setar animação para a lua
      toggleButton.classList.add("btn-moon")
      toggleButton.classList.remove("btn-sun")
    } else {
      console.log("Trocando para light ")
      tema.setAttribute("href", "assets/style/temas/light.css")
  
      //setar animação para o sol
      toggleButton.classList.add("btn-sun")
      toggleButton.classList.remove("btn-moon")
}})
})


// Trocar de abas 
//          Função para chamar a aba selecionada
function reloadPage(page) {
  content.innerHTML = objetoPages[page] +  objetoPages.footer
}

//          Evento de capturar o clique nos itens do menu
menuItens.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute ('data-page')
    reloadPage(page)
  })
})

//          Listener para o SPA gerado pelo javascript
document.addEventListener('click', (e) => {
  var item = e.target.closest('#menu li')
  if (item) {
    var page = item.getAttribute('data-page')
    reloadPage(page)
  }
})

//          Carregar a página inicial
reloadPage("contato")
function reloadPage(page) {
//          Fade ao iniciar
  content.classList.add("fade-out")

//          Arrowfunction para esperar animação e realizar as trocas de classes
  setTimeout(() => {
    content.innerHTML = objetoPages[page] + objetoPages.footer
    content.classList.remove("fade-out")
    content.classList.add("fade-in")

//          Remove o fade para não sobrepor a animação
setTimeout(() => {
  content.classList.remove("fade-in")
}, 500 )
}, 500)
}

botaoForm.addEventListener('click', () => {
    
})