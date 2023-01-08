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