const IDADE_MINIMA = 18;

function verificarCadastro() {
  let idade = Number(document.getElementById("idade").value);

  if (idade >= IDADE_MINIMA) {
    document.getElementById("resultado").innerText = "Cadastro permitido";
  } else {
    document.getElementById("resultado").innerText = "Cadastro não permitido (menor de idade)";
  }
}