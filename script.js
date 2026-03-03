// Criando a função range() exigida, já que o JS não a tem por padrão
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
