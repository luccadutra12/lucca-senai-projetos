function verificar() {
  let pontos = Number(document.getElementById("pontos").value);

  if (pontos >= 100) {
    document.getElementById("resultado").innerText = "Jogador avançado";
  } else if (pontos >= 50) {
    document.getElementById("resultado").innerText = "Jogador intermediário";
  } else {
    document.getElementById("resultado").innerText = "Jogador iniciante";
  }
}