document.getElementById('idadeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome1 = document.getElementById('nome1').value;
    const ano1 = parseInt(document.getElementById('ano1').value);

    const nome2 = document.getElementById('nome2').value;
    const ano2 = parseInt(document.getElementById('ano2').value);

    const nome3 = document.getElementById('nome3').value;
    const ano3 = parseInt(document.getElementById('ano3').value);

    const currentYear = new Date().getFullYear();

    const pessoas = [
        { nome: nome1, idade: currentYear - ano1 },
        { nome: nome2, idade: currentYear - ano2 },
        { nome: nome3, idade: currentYear - ano3 }
    ];

    pessoas.sort((a, b) => b.idade - a.idade);

    document.getElementById('primeiraPessoa').innerText = `Pessoa mais velha: ${pessoas[0].nome} - ${pessoas[0].idade} anos`;
    document.getElementById('segundaPessoa').innerText = `Segunda pessoa mais velha: ${pessoas[1].nome} - ${pessoas[1].idade} anos`;
    document.getElementById('terceiraPessoa').innerText = `Terceira pessoa mais velha: ${pessoas[2].nome} - ${pessoas[2].idade} anos`;
});
