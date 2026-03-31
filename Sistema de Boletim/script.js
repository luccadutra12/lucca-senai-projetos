function gerarBoletim() {

  const alunos = [
    [7, 8, 6],
    [5, 4, 6],
    [9, 9, 9],
    [6, 7, 6]
  ];

  let resultadoHTML = "";
  let totalAprovados = 0;

  for (let i = 0; i < alunos.length; i++) {

    const notas = alunos[i];
    let soma = 0;

    let j = 0;

    while (j < notas.length) {
      soma += notas[j];
      j++;
    }

    const media = soma / notas.length;

    let resultado = "";
    let classe = "";

    if (media >= 9) {
      resultado = "Excelente";
      classe = "aprovado";
      totalAprovados++;
    } else if (media >= 7) {
      resultado = "Bom";
      classe = "aprovado";
      totalAprovados++;
    } else if (media >= 6) {
      resultado = "Aprovado";
      classe = "aprovado";
      totalAprovados++;
    } else {
      resultado = "Reprovado";
      classe = "reprovado";
    }

    resultadoHTML += `
      <div>
        Aluno ${i + 1}: ${media.toFixed(1)} → 
        <span class="${classe}">${resultado}</span>
      </div>
    `;
  }

  resultadoHTML += "<hr>";
  resultadoHTML += `Total aprovados: ${totalAprovados}`;

  document.getElementById("resultado").innerHTML = resultadoHTML;
}