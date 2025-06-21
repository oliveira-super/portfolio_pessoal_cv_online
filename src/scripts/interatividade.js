
const content = document.getElementById('content');

const menuItens = document.querySelectorAll('#menu li');

//          Objeto para cada página do SPA - dentro de tag main
const objetoPages = {
  home: `
    <div id="home">
      <h2 class="menus">Seja bem vindo ao meu portfólio</h2>
      <p>Página inicial do projeto - Portfólio pessoal</p>
      <p>SPA estruturado e estilizado com html e css, e interatividade feita com javascript puro.</p>
      <h2>Estudante Java</h2>
      <p>Futuro dev backend</p>
      <h3 id="title-iframe">Trabalhos feitos durante estudos</h3>
      <div id="iframe">
      <iframe 
      title="vimeo-player" 
      src="https://player.vimeo.com/video/1094858468?h=c07fed689f&autoplay=1&muted=1&loop=1&background=1" 
      width="640" 
      height="360" 
      frameborder="0" 
      allow="autoplay; fullscreen" 
      allowfullscreen>
      </iframe>
      </div>
      <a href="https://www.youtube.com/watch?v=9DkyozMdlEc&feature=youtu.be" target="_blank">Acessar o vídeo pelo youtube</a>
      <h2 id="title-img">Ferramentas usadas</h2>
      <div id="langs">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="assets/imgs/html.png" alt="simbolo do html"></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="assets/imgs/css.png" alt="simbolo do css"></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="assets/imgs/js.png" alt="simbolo do javascript"></a>
      </div>
    </div>
  `,
  sobre: `
    <div id="sobre">
      <div id="content-up">
          <div id="sobre-left">
            <h2>Olá, eu sou o <span>Daniel Filipe<span></h2>
            <p> Estudante de ADS</p>
            <p>Futuro desenvolvedor backend | Java</p>
            <div id="cv">
              <a href="cv/Currículo Daniel.pdf" download>
                <button>Download CV</button>
              </a>
              <a href="https://www.linkedin.com/in/danielfilipeoliveira2411/" target="_blank">
                <button>Linkedin</button>
              </a>
            </div>
          </div>
          <div id="sobre-right">
            <div id="mask-foto">
              <img src="assets/imgs/ME.png" alt="foto do meu rosto">
            </div>
          </div>
      </div>

      <div id="content-bottom">
        <div id="sobre-mim">
          <h2>Sobre mim</h2>
          <p>Curioso desde 2009 em computação, hoje cursando ADS (Análise e Desenvolvimento de Sistemas) sou entusiasta em tecnologias, buscando sempre por conta própria aprender e/ou me aprimorar.<br>
          recentemente iniciei minha jornada de estudos em Java e POO, após passar pelo frontend, afim de ingressar no mercado como desenvolvedor backend java</p>

          <p>Atualmente estudando JAVA, sou apaixonado por tecnologia, e entusiasta em aprender e solucionar problemas, tenho como objetivo continuar a me aperfeiçoar, e me tornar um desenvolvedor e contribuir com o desenvolvimento e de aplicações, em projetos de sucessos.</p>
        </div>
      </div>
    </div>
  `,
  projetos: `
    <h2 class="menus">Último projeto</h2>
    <p>último projeto aqui o link</p>

  `,
  contato: `
    <h2 class="menus">Contato</h2>
    <p>Você pode entrar em contato pelo email: exemplo@exemplo.com</p>
  `,
  footer: `
    
  `
};

//          Captura o clique nos itens do menu
function reloadPage(page) {
  content.innerHTML = objetoPages[page] + objetoPages.footer;
}

//          Captura o clique nos itens do menu
menuItens.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    reloadPage(page);
  });
});



//          Carregar a página inicial
reloadPage('home');