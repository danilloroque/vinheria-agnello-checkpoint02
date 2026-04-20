const ANO_ATUAL = 2026;
let cadastros = 0;
let estoqueBaixo = 0;

function iniciarSistema() {
    let nome = prompt("Insira seu nome: ");
    alert(`Cadastro realizado!\nSeja bem vindo ${nome}`);
    console.log(`Olá ${nome}!\nAqui estão os vinhos cadastrados: `);
    
    alert(`Vamos cadastrar os Vinhos!`);
    executarCadastro();
}

function classificarSafra(safra) {
    let idade = ANO_ATUAL - safra;
    if (idade <= 3) {
        console.log('\nVINHO JOVEM!');
    } else if (idade < 8) {
        console.log('\nVINHO AMADURECIDO!');
    } else {
        console.log('\nVINHO ANTIGO!');
    }
}

function executarCadastro() {
    let nomeVinho = prompt("Nome do vinho:");
    let tipoVinho = prompt("Tipo do vinho:");
    let safraVinho = parseInt(prompt("Ano da safra:"));
    
    classificarSafra(safraVinho);

    let estoqueVinho = parseInt(prompt("Quantidade em estoque:"));
    if (estoqueVinho < 5) {
        estoqueBaixo++;
    }

    let paisVinho = prompt(`País de origem:`);

    // Exibição dos dados
    let dadosVinho = `Nome do vinho: ${nomeVinho} \nTipo: ${tipoVinho} \nSafra: ${safraVinho} \nEstoque: ${estoqueVinho} \nPais: ${paisVinho}`;
    alert(dadosVinho);
    console.log(dadosVinho);

    cadastros++;
    verificarContinuidade();
}

// Função que decide se o "loop" continua ou para
function verificarContinuidade() {
    let resposta = prompt("Deseja cadastrar mais algum vinho? (s/n)").toLowerCase();

    if (resposta === "s") {
        executarCadastro(); //
    } else {
        alert('Confira os detalhes no console!');
        exibirResumoFinal();
    }
}
// Função para exibir o relatório final
function exibirResumoFinal() {
    console.log(`Cadastros realizados: ${cadastros}`);
    console.log(`Vinhos com estoque baixo: ${estoqueBaixo}`);
}

iniciarSistema();