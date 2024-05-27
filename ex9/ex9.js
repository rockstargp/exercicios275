document.getElementById('turmasForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const alunos = parseInt(document.getElementById('alunos').value);
    const turmas = parseInt(document.getElementById('turmas').value);

    if (isNaN(alunos) || isNaN(turmas) || alunos <= 0 || turmas <= 0) {
        alert("Por favor, insira números válidos maiores que zero.");
        return;
    }

    const pessoasPorTurma = Math.floor(alunos / turmas);
    const semTurma = alunos % turmas;

    document.getElementById('turmasCount').innerText = `Pessoas por turma: ${pessoasPorTurma}`;
    document.getElementById('semTurmaCount').innerText = `Pessoas sem turma: ${semTurma}`;
});
