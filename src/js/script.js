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

function classficarVinho(Safra) {
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

alert(`Cadastro realizado!\nSeja bem vindo ${nome}, Veja os detalhes no console.`);



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