document.getElementById('omeleteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const pessoas = parseInt(document.getElementById('pessoas').value);

    if (isNaN(pessoas) || pessoas <= 0) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    const ovos = pessoas * 2;
    const queijo = pessoas * 50;

    document.getElementById('ovos').innerText = `Ovos necessários: ${ovos}`;
    document.getElementById('queijo').innerText = `Queijo necessário: ${queijo} gramas`;
});
