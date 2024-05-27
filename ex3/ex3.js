document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Divisão por zero';

    document.getElementById('soma').innerText = `Soma: ${soma}`;
    document.getElementById('subtracao').innerText = `Subtração: ${subtracao}`;
    document.getElementById('multiplicacao').innerText = `Multiplicação: ${multiplicacao}`;
    document.getElementById('divisao').innerText = `Divisão: ${divisao}`;
});
