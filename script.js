// 1. Criando a função range() exigida
function range(tamanho) {
    return [...Array(tamanho).keys()];
}

// 2. As 3 listas de nomes
const listaVip = ["Ana", "Bruno", "Amanda", "Carlos"];
const listaFamilia = ["Beatriz", "Alberto", "Daniela", "Eduardo"];
const listaAmigos = ["Alice", "Ferna// Criando a função range() exigida, já que o JS não a tem por padrão
function range(tamanho) {
    return [...Array(tamanho).keys()];
}

// 1. Criando as 3 listas de nomes
const lista1 = ["Ana", "Bruno", "Amanda", "Carlos"];
const lista2 = ["Beatriz", "Alberto", "Daniela", "Eduardo"];
const lista3 = ["Alice", "Fernando", "Gabriel", "Adriana"];

// Unindo as listas em uma só matriz
const todasAsListas = [lista1, lista2, lista3];

// Variáveis de controle
let contadorA = 0;
const nomesLongos = [];

// Pegando os elementos do HTML onde vamos injetar os dados
const ulMaiusculas = document.getElementById("lista-maiusculas");
const spanContador = document.getElementById("contador-a");
const ulLongos = document.getElementById("lista-longos");

// 2. Usando o loop com a função range() para percorrer as listas
const indicesDasListas = range(todasAsListas.length);

for (let i of indicesDasListas) {
    let listaAtual = todasAsListas[i];
    let indicesDosNomes = range(listaAtual.length);
    
    for (let j of indicesDosNomes) {
        let nome = listaAtual[j];
        
        // Adicionando o nome em MAIÚSCULAS na tela
        let liMaiuscula = document.createElement("li");
        liMaiuscula.textContent = nome.toUpperCase();
        ulMaiusculas.appendChild(liMaiuscula);
        
        // 3. Contando nomes que começam com "A"
        if (nome.toUpperCase().startsWith("A")) {
            contadorA++;
        }
        
        // 4. Separando os nomes com mais de 5 letras
        if (nome.length > 5) {
            nomesLongos.push(nome);
        }
    }
}

// Exibindo o total de letras A na tela
spanContador.textContent = contadorA;

// Exibindo a lista de nomes longos na tela
for (let k of range(nomesLongos.length)) {
    let liLongo = document.createElement("li");
    liLongo.textContent = nomesLongos[k];
    ulLongos.appendChild(liLongo);
}
ndo", "Gabriel", "Adriana"];

const todasAsListas = [listaVip, listaFamilia, listaAmigos];
const nomesDasListas = ["Lista VIP", "Lista Família", "Lista Amigos"];

// Capturando elementos do HTML
const tituloLista = document.getElementById("titulo-lista");
const ulMaiusculas = document.getElementById("lista-maiusculas");
const spanContador = document.getElementById("contador-a");
const ulLongos = document.getElementById("lista-longos");
const botoes = document.querySelectorAll(".menu button");

// 3. Função que faz o loop e imprime os dados
function processarLista(indice) {
    // Limpa a tela antes de mostrar a nova lista
    ulMaiusculas.innerHTML = "";
    ulLongos.innerHTML = "";
    let contadorA = 0;
    let nomesLongos = [];

    tituloLista.textContent = "Resultados da " + nomesDasListas[indice];
    let listaAtual = todasAsListas[indice];
    
    // O Loop usando a função range()
    for (let i of range(listaAtual.length)) {
        let nome = listaAtual[i];

        // Letras Maiúsculas
        let li = document.createElement("li");
        li.textContent = nome.toUpperCase();
        ulMaiusculas.appendChild(li);

        // Conta a letra "A"
        if (nome.toUpperCase().startsWith("A")) {
            contadorA++;
        }

        // Verifica se tem mais de 5 letras
        if (nome.length > 5) {
            nomesLongos.push(nome);
        }
    }

    // Atualiza o contador na tela
    spanContador.textContent = contadorA;

    // Imprime a lista de nomes longos
    for (let j of range(nomesLongos.length)) {
        let liLongo = document.createElement("li");
        liLongo.textContent = nomesLongos[j];
        ulLongos.appendChild(liLongo);
    }
}

// 4. Conectando os botões à função
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        // Muda a cor do botão clicado
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        // Roda a lógica para a lista escolhida
        processarLista(index);
    });
});

// Começa mostrando a primeira lista por padrão
processarLista(0);
