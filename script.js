function selecionarComida(thisChoose) {
  const produtoSelecionado = document.querySelector('.food-list .selecionado');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
  } else {
    thisChoose.classList.add('selecionado');
  }
}

function selecionarBebida(thisChoose) {
  const produtoSelecionado = document.querySelector('.drink-list .selecionado');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
  } else {
    thisChoose.classList.add('selecionado');
  }
}

function selecionarSobremesa(thisChoose) {
  const produtoSelecionado = document.querySelector('.dessert-list .selecionado');
  const iconeFinalizado = document.querySelector('.dessert-product .escondido');

  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove('selecionado');
    
  } else {
    thisChoose.classList.add('selecionado');
  }

}