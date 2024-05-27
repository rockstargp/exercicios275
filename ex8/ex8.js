document.getElementById('parOuImparForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    let mensagem;

    if (isNaN(numero)) {
        mensagem = "Por favor, insira um número válido.";
        document.getElementById('mensagem').style.color = 'red';
    } else {
        if (numero % 2 === 0) {
            mensagem = `O número ${numero} é PAR.`;
            document.getElementById('mensagem').style.color = 'green';
        } else {
            mensagem = `O número ${numero} é ÍMPAR.`;
            document.getElementById('mensagem').style.color = 'orange';
        }
    }

    document.getElementById('mensagem').innerText = mensagem;
});
