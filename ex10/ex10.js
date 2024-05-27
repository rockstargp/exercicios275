document.getElementById('metaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const valorVendido = parseFloat(document.getElementById('valorVendido').value);
    const meta = parseFloat(document.getElementById('meta').value);
    const metaMinima = parseFloat(document.getElementById('metaMinima').value);

    if (isNaN(valorVendido) || isNaN(meta) || isNaN(metaMinima) || valorVendido < 0 || meta < 0 || metaMinima < 0) {
        alert("Por favor, insira valores válidos maiores ou iguais a zero.");
        return;
    }

    const percentualMeta = (valorVendido / meta) * 100;
    const percentualMetaMinima = (valorVendido / metaMinima) * 100;

    let mensagemAtingiuMeta;
    if (valorVendido >= meta) {
        mensagemAtingiuMeta = "Parabéns! Você atingiu a meta.";
        document.getElementById('atingiuMeta').style.color = 'green';
    } else if (valorVendido >= metaMinima) {
        mensagemAtingiuMeta = "Você atingiu a meta mínima.";
        document.getElementById('atingiuMeta').style.color = 'orange';
    } else {
        mensagemAtingiuMeta = "Você não atingiu nenhuma das metas.";
        document.getElementById('atingiuMeta').style.color = 'red';
    }

    document.getElementById('atingiuMeta').innerText = mensagemAtingiuMeta;
    document.getElementById('percentualMeta').innerText = `Percentual de atingimento da meta: ${percentualMeta.toFixed(2)}%`;
    document.getElementById('percentualMetaMinima').innerText = `Percentual de atingimento da meta mínima: ${percentualMetaMinima.toFixed(2)}%`;
});
