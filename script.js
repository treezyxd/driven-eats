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

function enviarWhatsapp() {
  const prato = document.querySelector('.food-list .selecionado .product-name');
  const bebida = document.querySelector('.drink-list .selecionado .product-name');
  const sobremesa = document.querySelector('.dessert-list .selecionado .product-name');
  const pratoPreco = document.querySelector('.food-list .selecionado .price');
  const bebidaPreco = document.querySelector('.drink-list .selecionado .price');
  const sobremesaPreco = document.querySelector('.dessert-list .selecionado .price');

  
  const resultadoPrato = pratoPreco.innerHTML.split(' ')[1].replace(',', '.');
  const resultadoBebida = bebidaPreco.innerHTML.split(' ')[1].replace(',', '.');
  const resultadoSobremesa = sobremesaPreco.innerHTML.split(' ')[1].replace(',', '.');

  const soma = Number(resultadoPrato) + Number(resultadoBebida) + Number(resultadoSobremesa);

  const message = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${prato.innerHTML}
    - Bebida: ${bebida.innerHTML}
    - Sobremesa: ${sobremesa.innerHTML}
    Total: R$${soma.toFixed(2).replace('.', ',')}
  `;

  const whatsapp = `https://wa.me/5521996630608?text=${encodeURIComponent(message)}`;

  window.open(whatsapp);
}