const content = document.getElementById('content');

const menuItens = document.querySelectorAll('#menu li');

//          Função para chamar a aba selecionada
function reloadPage(page) {
  content.innerHTML = objetoPages[page] +  objetoPages.footer;
}

//          Evento de capturar o clique nos itens do menu
menuItens.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute ('data-page');
    reloadPage(page);
  });
});

//          Listener para o SPA gerado pelo javascript
document.addEventListener('click', (e) => {
  var item = e.target.closest('#menu li');
  if (item) {
    var page = item.getAttribute('data-page');
    reloadPage(page);
  }
});

//          Carregar a página inicial
reloadPage ('contato');
