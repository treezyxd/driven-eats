function selecionarComida(choosedThis) {
  const produtoSelecionado = document.querySelector('.food-list .selecionado');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
  } else {
    choosedThis.classList.add('selecionado');
  }
}

function selecionarBebida(choosedThis) {
  const produtoSelecionado = document.querySelector('.drink-list .selecionado');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
    // esconderCheck();
  } else {
    choosedThis.classList.add('selecionado');
    // mostrarCheck();
  }
}

function selecionarSobremesa(choosedThis) {
  const produtoSelecionado = document.querySelector('.dessert-list .selecionado');
  const iconFinalizado = document.querySelector('.dessert-product .escondido');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
  }
  choosedThis.classList.add('selecionado');

  if (iconFinalizado !== null) {
    iconFinalizado.classList.remove('escondido');
  }
  iconFinalizado.classList.add('escondido');
}

function selecionarProduto(pedido) {
  const selecionadoAnterior = pedido.parentElement.querySelector('.selecionado');
  
  if(selecionadoAnterior !== null) {
    selecionadoAnterior.classList.remove('selecionado');
  }
  pedido.classList.add('selecionado'); 
  document.querySelector('.btn').add
}

function liberarPedido(choosedThis) {
  const liberarBotao = document.querySelector('.finish-order .btn-selecionado');
  const comidaSelecionada = document.querySelector('.food-list selecionado');

  if(comidaSelecionada !== null) {
    liberarBotao.classList.add('btn-selecionado');
  }
}