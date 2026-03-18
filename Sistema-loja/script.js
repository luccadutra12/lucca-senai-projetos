const PRECO_MOUSE = 80;
const PRECO_TECLADO = 120;
const PRECO_FONE = 60; 
const PRECO_CELULAR = 1000; 
const PRECO_CARREGADOR = 50;

const TAXA_ENTREGA = 20;
const DESCONTO = 0.1; // 10% de desconto

function calcularTotal() {
    let produto = document.getElementById("produto").value;
    let quantidade = Number(document.getElementById("quantidade").value);  

    if (quantidade <= 0) {
        document.getElementById("resultado").innerText =
        "Digite uma quantidade válida.";
        return;
    }

    let preco = 0;

    if (produto === "mouse") {
        preco = PRECO_MOUSE;
    } else if (produto === "teclado") {
        preco = PRECO_TECLADO;
    } else if (produto === "fone") {
        preco = PRECO_FONE;
    } else if (produto === "celular") {
        preco = PRECO_CELULAR;
    } else if (produto === "carregador") {
        preco = PRECO_CARREGADOR;
    } 
    let total = preco * quantidade;
    // desconto se passar de 300
    if (total > 300) {
        total = total - (total * DESCONTO);
    }    
    // somar entrega
    total = total + TAXA_ENTREGA;
    document.getElementById("resultado").innerText = 
      "Valor final: R$ " + total.toFixed(2);
}

