document.getElementById('comparacaoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    let mensagem;

    if (isNaN(numero1) || isNaN(numero2)) {
        mensagem = "Por favor, insira números válidos.";
        document.getElementById('mensagem').style.color = 'red';
    } else if (numero1 > numero2) {
        mensagem = `O primeiro número (${numero1}) é maior que o segundo número (${numero2}).`;
        document.getElementById('mensagem').style.color = 'green';
    } else if (numero1 < numero2) {
        mensagem = `O primeiro número (${numero1}) é menor que o segundo número (${numero2}).`;
        document.getElementById('mensagem').style.color = 'orange';
    } else {
        mensagem = `O primeiro número (${numero1}) é igual ao segundo número (${numero2}).`;
        document.getElementById('mensagem').style.color = 'blue';
    }

    document.getElementById('mensagem').innerText = mensagem;
});
