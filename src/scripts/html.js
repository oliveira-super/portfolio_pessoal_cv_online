//            Objeto para cada página do  SPA - dentro de tag main
const objetoPages = {
    home: `
      <div id="home">
        <h2 class="menus">Seja bem vindo ao meu portfólio</h2>
        <p>Página inicial do projeto - Portfólio pessoal</p>
        <p>SPA estruturado e estilizado com html e css, e interatividade feita com javascript puro.</p>
        <hr>

        <h2>Futuro dev backend</h2>
        <p>Estudante Java, Poo, Estrutura de dados e Db</p>
        <hr>
        
        <h2 id="title-img">Ferramentas usadas</h2>
        <div id="langs">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="assets/imgs/html.png" alt="simbolo do html"></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="assets/imgs/css.png" alt="simbolo do css"></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="assets/imgs/js.png" alt="simbolo do javascript"></a>
        </div>
        <h3 id="title-iframe">Exercícios feitos durante estudos</h3>
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
          <a id="link" href="https://www.youtube.com/watch?v=9DkyozMdlEc&feature=youtu.be" target="_blank">Acessar o vídeo pelo youtube</a>
      </div>
    `,
    sobre: `
      <div id="sobre">
        <div id="content-up" class="content-portfolio">
            <div id="sobre-left">
              <h2>Olá, eu sou o <span>Daniel Filipe</span></h2>
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
  
        <div id="content-bottom" class="content-portfolio">
          <div id="sobre-mim">
            <h2>Sobre mim</h2>
            <p>Curioso desde 2009 em computação, hoje cursando ADS (Análise e Desenvolvimento de Sistemas) sou entusiasta em tecnologias, buscando sempre por conta própria aprender e/ou me aprimorar.<br>
            recentemente iniciei minha jornada de estudos em Java e Poo, após passar pelo frontend, afim de ingressar no mercado como desenvolvedor backend java</p>
  
            <p>Atualmente estudando Java e Db, sou apaixonado por tecnologia, e entusiasta em aprender e solucionar problemas, tenho como objetivo continuar a me aperfeiçoar, e me tornar um desenvolvedor e contribuir com o desenvolvimento e de aplicações, em projetos de sucessos.</p>
            
            <h2 id="leque-tools-h2">Leque de ferramentas atuais</h2>
              <div id="leque-tools" class="content-portfolio">
                <img src="assets/imgs/htmlico.png" alt="icone do html">
                <img src="assets/imgs/cssico.png" alt="icone do css">
                <img src="assets/imgs/jsico.png" alt="icone do javascript">
                <img src="assets/imgs/nodeico.png" alt="icone do node">
                <img src="assets/imgs/pyico.png" alt="icone do python">
                <img src="assets/imgs/gitico.png" alt="icone do git">
                <img src="assets/imgs/mysqlico.png" alt="icone do mysql">
                <img src="assets/imgs/linuxico.png" alt="icone do linux">
              </div>
          </div>
        </div>
      </div>
    `,
    projetos: `
      <div id="projetos">
        <div>
          <h2>Projetos desenvolvidos com html, css e javascript</h2>
          <p>Projetos apenas com frontend básico</p>
        </div>
  
        <div id="projetos-wrap">
          <div class="content projeto-1">
            <div>
              <img src="assets/imgs/projeto_1.png" alt="print do projeto portal de notícias">
              <p>Portal de notícias</p>
              <a href="https://oliveira-super.github.io/portal-de-noticias//" target="_blank">Ver página no github pages</a>
              <a href="https://github.com/oliveira-super/portal-de-noticias" target="_blank">Ver código no repositório</a>
            </div>
          </div>
  
          <div class="content projeto-2">
            <div>
              <img src="assets/imgs/projeto_2.png" alt="print do projeto login vintage">
              <p>Projeto login vintage</p>
              <a href="https://oliveira-super.github.io/login-css-js/login-css-js/iframe.html" target="_blank">Ver página no github pages</a>
              <a href="https://github.com/oliveira-super/login-css-js" target="_blank">Ver código no repositório</a>
            </div>
          </div>
  
          <div class="content projeto-3">
            <div>
              <img src="assets/imgs/projeto_3.png" alt="print do projeto local turístico">
              <p>Projeto local turístico</p>
              <a href="https://oliveira-super.github.io/local-turistico/" target="_blank">Ver página no github pages</a>
              <a href="https://github.com/oliveira-super/local-turistico" target="_blank">Ver código no repositório</a>
            </div>
          </div>
  
        </div>
      </div>
  
    `,
    contato: `
      <div id="contato">
      <iframe name="esconder-api-page" style="display:none;"></iframe>
        <form id="form-contato" action="https://formsubmit.co/lipefirefox13@gmail.com" method="POST" target="esconder-api-page">
          <div id="side-esq">
            <div>
              <label for="nome">Seu nome:</label>
              <input type="text" id="nome" name="nome" required minlength="3" maxlength="31">
            </div>
            
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required maxlength="31">
            </div>
          </div>
          <div id="side-dir">
            <div>
              <label for="msg">Envie uma mensagem:</label>
              <textarea id="msg" name="msg" required maxlength="105"></textarea>
            </div>
          </div>
          <input type="hidden" name="_captcha" value="false">
          <button onclick="enviar()" type="submit" id="botao-form">Enviar</button>
        </form>
      </div>
    `,
    footer: `
      <img id="waves" src="assets/imgs/waves.png">
      <div id="footer">
      
        <div id="social-footer">
          <h2>Portfólio Pessoal</h2>
          <div id="social-div">
            <a href="https://www.instagram.com/olvr.works/" target="_blank" class="footer-link" id="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
  
            <a href="https://github.com/oliveira-super" target="_blank" class="footer-link" id="github">
              <i class="fa-brands fa-github"></i>
            </a>
  
            <a href="https://discord.gg/hCqQsAN9" target="_blank" class="footer-link" id="discord">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
  
        <div id="nav-footer">
          <nav>
            <ul id="menu">
              <li data-page="home"><p>Início</p></li>
              <li data-page="sobre"><p>Sobre</p></li>
              <li data-page="projetos"><p>Projetos</p></li>
              <li data-page="contato"><p>Contato</p></li>
            </ul>
          </nav>
        </div>
  
        <div id="contatos-footer">
          <h3>Entre em contato</h3>
          <p>(11) 9 8856-7651</p>
          <p>oliveirawork12@gmail.com</p>
          <p>Barueri-SP</p>
        </div>
      </div>
    `
  }
