let comidaSelecionada;

function selecionarComida(choosedThis) {
  comidaSelecionada = document.querySelector('.food-list .selecionado');

  if(comidaSelecionada !== null) {
    comidaSelecionada.classList.remove('selecionado');
  }
  choosedThis.classList.add('selecionado');
}

let bebidaSelecionada;

function selecionarBebida(choosedThis) {
  bebidaSelecionada = document.querySelector('.drink-list .selecionado');

  if(bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove('selecionado');
  }
  choosedThis.classList.add('selecionado');
}

let sobremesaSelecionada;

function selecionarSobremesa(choosedThis) {
  sobremesaSelecionada = document.querySelector('.dessert-list .selecionado');

  if(sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove('selecionado');
  }
  choosedThis.classList.add('selecionado');
}

function verificaPedido() {
  const mudarBotao = document.querySelector('.btn');
  
  if( comidaSelecionada !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined) {
    mudarBotao.removeAttribute('disabled');
    mudarBotao.classList.add('btn-selecionado');
    mudarBotao.innerHTML = "Fechar pedido";
  }
}