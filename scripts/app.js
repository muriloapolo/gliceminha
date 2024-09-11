// Função para cadastrar a glicemia
function cadastrarGlicemia() {
    const glicemia = document.getElementById('glicemiaInput').value;
    const dataDaAfericao = document.getElementById('data-da-afericao').value;

    // Verifica se o campo de glicemia foi preenchido
    if (glicemia === '' || dataDaAfericao == '') {
        alert('Por favor, preencha os campos.');
        return;
    }

    // Divide a string da data no formato yyyy-mm-dd
    const partesData = dataDaAfericao.split('-');
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];

    // Formata para o formato dd/mm/yyyy
    const dataFormatada = `${dia}/${mes}/${ano}`;


    // Exibe a glicemia nos resultados
    document.getElementById('valorGlicemia').textContent = `${glicemia} mg/dL - ${dataFormatada}`;

}

// Função para calcular o IMC e classificar
function calcularIMC() {
    const peso = document.getElementById('pesoInput').value;
    const altura = document.getElementById('alturaInput').value;
    const alturaEmCM = altura / 100

    // Verifica se os campos de peso e altura foram preenchidos
    if (peso === '' || alturaEmCM === '') {
        alert('Por favor, preencha os campos de peso e altura!');
        return;
    }

    // Calcula o IMC
    const imc = (peso / (alturaEmCM * alturaEmCM)).toFixed(2);

    // Classificação do IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3 (mórbida)';
    }

    // Exibe o IMC e a classificação nos resultados
    document.getElementById('valorIMC').textContent = imc;
    document.getElementById('classificacaoIMC').textContent = classificacao;
}