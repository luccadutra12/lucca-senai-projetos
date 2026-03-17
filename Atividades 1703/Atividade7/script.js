const PRECO_PRODUTO = 50;
const TAXA_ENTREGA = 10;
const DESCONTO = 20;

function calcularCompra() {
  let nome = document.getElementById("nome").value;
  let quantidade = Number(document.getElementById("quantidade").value);

  let valorProdutos = quantidade * PRECO_PRODUTO;
  let descontoAplicado = 0;

  if (valorProdutos > 200) {
    descontoAplicado = DESCONTO;
  }

  let total = valorProdutos + TAXA_ENTREGA - descontoAplicado;

  document.getElementById("resultado").innerText =
    "Cliente: " + nome +
    "\nValor dos produtos: R$ " + valorProdutos +
    "\nTaxa de entrega: R$ " + TAXA_ENTREGA +
    "\nDesconto: R$ " + descontoAplicado +
    "\nTotal: R$ " + total;
}