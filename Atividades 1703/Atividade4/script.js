function calcularFrete() {
  let valorCompra = Number(document.getElementById("valor").value);

  if (valorCompra >= 150) {
    document.getElementById("resultado").innerText = "Frete grátis!";
  } else {
    document.getElementById("resultado").innerText = "Frete pago.";
  }
}