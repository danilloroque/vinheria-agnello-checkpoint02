// Funções 

// Função para validar entradas do usuário
function validarEntrada(mensagem) {
    let entrada = prompt(mensagem);

    while (entrada === "" || entrada === "") {
        alert("Campo obrigatório! Digite novamente.");
        entrada = prompt(mensagem);
    }

    return entrada;

}
// Função de estoque baixo
function verificarEstoqueBaixo(estoque) {
    return estoque < 5;
}

function classficarVinho(safra) {
    let anoAtual = 2026;
    let idade = anoAtual - safra;

    if (idade <= 3 ) {
        return "jovem";
    }
    else if (idade <= 10) {
        return "amadurecido";
    } else {
        return "antigo";
    }
}

// Função para exibir dados do vinho
function exibirDados(nome, tipo, safra, estoque, pais, classificacao) {
    console.log(
        `${nome}:
        TIPO - ${tipo}
        SAFRA - ${safra}
        ESTOQUE - ${estoque}
        PAÍS - ${pais}
        CLASSIFICAÇÃO - ${classificacao}`
    );
    alert(`Vinho ${nome} cadastrado com sucesso! Classificação: ${classificacao}`);
}

let nome = validarEntrada("Insira seu nome: ");
let estado = validarEntrada("Insira o seu estado: ");

let cadastros = 0;
let estoqueBaixo = 0;
let vinhoMaisAntigo = 0;
let menorSafra = 20;
let continuar;

alert(`Cadastro realizado!\nSeja bem vindo ${nome}, Veja os detalhes no console.`);

//cadastro de vinhos
alert(`Vamos cadastrar os Vinhos!`)
while (continuar){
    let nomeVinho = validarEntrada("Nome do vinho:");
    let tipoVinho = validarEntrada("Tipo do vinho:");
    let safraVinho = parseInt(validarEntrada("Ano da safra:"));
    let estoqueVinho = parseInt (validarEntrada("Quantidade em estoque:"));
    let paisVinho = validarEntrada(`País de origem:`);

    //processamento
    let classe = classificarVinho(safraVinho);

    if (verificarEstoqueBaixo(estoqueVinho)) {
        EstoqueBaixo++
    }

    //Encontrar o vinho mais antigo
    if (safraVinho < menorSafra) {
        menorSafra = safraVinho
        vinhoMaisAntigo = nomeVinho;
    }

    //contagem
    exibirDados(nomeVinho, tipoVinho, safraVinho, estoqueVinho, paisVinho, classe);
    cadastros++;

    continuar = confirm("Deseja cadastrar mais um vinho?");

}

console.log(`Olá ${nome}, esses são os nossos vinhos disponíveis para o estado de ${estado}: `);


console.log(`Cabernet 2020:
TIPO - Tinto

SAFRA - 2020

ESTOQUE - 15  

PAÍS - França 
`);


console.log(`Sauvignon Blanc 2023:
TIPO - Branco

SAFRA - 2023

ESTOQUE - 30 

PAÍS - Argentina 
`);


console.log(`Viejo Feo Reserva Pinot Noir Rosé 2024:
TIPO - Rosé

SAFRA - 2024

ESTOQUE - 50 

PAÍS - Chile`
);

console.log(`Total de vinhos cadastrados: ${cadastros}`);
console.log(`Vinhos com estoque baixo (< 5): ${estoqueBaixo}`);
if (vinhoMaisAntigo) {
    console.log(`O vinho mais antigo é: ${vinhoMaisAntigo}, da safra do ano de ${menorSafra}`);
}