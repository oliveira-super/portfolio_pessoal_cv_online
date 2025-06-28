//          Variaveis globais
const sidebarBtn = document.getElementById("sidebar-btn")

const sidebarMask = document.getElementById("sidebar-mask")

const sidebarBtnTema = document.getElementById("back-button-side")

const navSidebar = document.getElementById("nav-header-side")

// sidebar mask
//            Listeners para mostrar os conteudos ao clicar, como a nav na sidebar...
sidebarBtn.addEventListener('click', () => {
    if (sidebarMask.classList.contains("mask-sidebar")) {
        sidebarMask.classList.remove("mask-sidebar")
       sidebarMask.classList.add("mask-sidebar-off")
    } else {
        sidebarMask.classList.remove("mask-sidebar-off" )
        sidebarMask.classList.add("mask-sidebar")
    }
//botao de tema sidebar
    if(sidebarBtnTema.classList.contains("back-button")){
        sidebarBtnTema.classList.remove("back-button")
        sidebarBtnTema.classList.add("back-button-on")
    } else {
        sidebarBtnTema.classList.remove("back-button-on")
        sidebarBtnTema.classList.add("back-button")
    }
//botoes da nav sidebar
    if(navSidebar.classList.contains("nav-header-side")){
        navSidebar.classList.remove("nav-header-side")
        navSidebar.classList.add("nav-header-side-on")
      } else{
        navSidebar.classList.remove("nav-header-side-on")
        navSidebar.classList.add("nav-header-side")
      }
  })

//              sair do sidebar ao escolher botao da nav
  navSidebar.addEventListener("click", () => {
    sidebarBtn.click()
})

  //            Observa o tamanho da tela para retirar as configs, blur, botões...
  function checarLargura() {
    if (window.innerWidth > 910) {
        sidebarMask.classList.remove("mask-sidebar")
        sidebarMask.classList.add("mask-sidebar-off")
        
        sidebarBtnTema.classList.remove("back-button-on")
        sidebarBtnTema.classList.add("back-button")

        navSidebar.classList.remove("nav-header-side-on")
        navSidebar.classList.add("nav-header-side")
    }
  }

//            Verifica quando a tela mudar de tamanho
  window.addEventListener("resize", checarLargura)