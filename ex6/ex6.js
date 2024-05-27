document.getElementById('notaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nota = parseFloat(document.getElementById('nota').value);
    let mensagem;

    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensagem = "Por favor, insira uma nota válida entre 0 e 10.";
        document.getElementById('mensagem').style.color = 'red';
    } else if (nota > 6) {
        mensagem = "Aprovado";
        document.getElementById('mensagem').style.color = 'green';
    } else if (nota > 4 && nota <= 6) {
        mensagem = "Precisa fazer prova substitutiva";
        document.getElementById('mensagem').style.color = 'orange';
    } else {
        mensagem = "Reprovado";
        document.getElementById('mensagem').style.color = 'red';
    }

    document.getElementById('mensagem').innerText = mensagem;
});
document.getElementById('notaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nota = parseFloat(document.getElementById('nota').value);
    let mensagem;

    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensagem = "Por favor, insira uma nota válida entre 0 e 10.";
        document.getElementById('mensagem').style.color = 'red';
    } else if (nota > 6) {
        mensagem = "Aprovado";
        document.getElementById('mensagem').style.color = 'green';
    } else if (nota > 4 && nota <= 6) {
        mensagem = "Precisa fazer prova substitutiva";
        document.getElementById('mensagem').style.color = 'orange';
    } else {
        mensagem = "Reprovado";
        document.getElementById('mensagem').style.color = 'red';
    }

    document.getElementById('mensagem').innerText = mensagem;
});
