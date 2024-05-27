document.getElementById('cotacaoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cotacao = parseFloat(document.getElementById('cotacao').value);

    if (isNaN(cotacao)) {
        alert('Por favor, insira um valor válido para a cotação.');
        return;
    }

    const umPorcento = cotacao * 1.01;
    const doisPorcento = cotacao * 1.02;
    const cincoPorcento = cotacao * 1.05;
    const dezPorcento = cotacao * 1.10;

    document.getElementById('umPorcento').innerText = `Cotação com aumento de 1%: R$ ${umPorcento.toFixed(2)}`;
    document.getElementById('doisPorcento').innerText = `Cotação com aumento de 2%: R$ ${doisPorcento.toFixed(2)}`;
    document.getElementById('cincoPorcento').innerText = `Cotação com aumento de 5%: R$ ${cincoPorcento.toFixed(2)}`;
    document.getElementById('dezPorcento').innerText = `Cotação com aumento de 10%: R$ ${dezPorcento.toFixed(2)}`;
});
