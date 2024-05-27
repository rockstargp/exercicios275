document.getElementById('pizzaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const sabor1 = document.getElementById('sabor1').value;
    const sabor2 = document.getElementById('sabor2').value;
    const sabor3 = document.getElementById('sabor3').value;
    const sabor4 = document.getElementById('sabor4').value;
    const refrigerantes = parseInt(document.getElementById('refrigerantes').value);

    if (isNaN(refrigerantes) || refrigerantes < 0) {
        alert('Por favor, insira um número válido de refrigerantes.');
        return;
    }

    const valorPizza = 12.00;
    const valorRefrigerante = 7.00;

    const valorTotal = (4 * valorPizza) + (refrigerantes * valorRefrigerante);

    document.getElementById('sabores').innerText = `Sabores escolhidos: ${sabor1}, ${sabor2}, ${sabor3}, ${sabor4}`;
    document.getElementById('valorTotal').innerText = `Valor total a pagar: R$ ${valorTotal.toFixed(2)}`;
});
