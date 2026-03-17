const MEDIA_MINIMA = 7;

function calcular() {
    
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    let resultado = "";

    if (media >= MEDIA_MINIMA) {
        resultado = "Aluno APROVADO";
    } else {
        resultado = "Aluno REPROVADO";
    }

    document.getElementById("media").innerText =
        "Média: " + media + " - " + resultado;
}