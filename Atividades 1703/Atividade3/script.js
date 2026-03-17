let usuariosOnline = 0;
const LIMITE = 100;

function atualizarTela() {
  document.getElementById("contador").textContent = usuariosOnline;
}

function entrar() {
  if (usuariosOnline < LIMITE) {
    usuariosOnline++;
    document.getElementById("mensagem").textContent = "Usuário entrou!";
  } else {
    document.getElementById("mensagem").textContent = "Limite atingido! (100 usuários)";
  }
  atualizarTela();
}

function sair() {
  if (usuariosOnline > 0) {
    usuariosOnline--;
    document.getElementById("mensagem").textContent = "Usuário saiu!";
  } else {
    document.getElementById("mensagem").textContent = "Nenhum usuário online.";
  }
  atualizarTela();
}