// script.js

// Listas de convidados
const lista1 = ["Alice", "Ana", "Antonio", "Bruna"];
const lista2 = ["Carlos", "Mariana", "Amanda", "João"];
const lista3 = ["Eduardo", "Juliana", "Ricardo", "Ana"];

let convidadosComA = [];
let convidadosMaiorQueCinco = [];

// Função que usa o range para iterar sobre as listas
function range(inicio, fim) {
    let arr = [];
    for (let i = inicio; i < fim; i++) {
        arr.push(i);
    }
    return arr;
}

// Função para imprimir os nomes nas listas e aplicar os filtros
function imprimirLista(id, lista) {
    const ul = document.createElement("ul");
    
    // Limpa qualquer conteúdo anterior
    document.getElementById(id).innerHTML = '';

    // Loop para adicionar os nomes na lista
    const indices = range(0, lista.length); // Usando o range()
    for (let i of indices) {
        const li = document.createElement("li");
        li.textContent = lista[i].toUpperCase(); // Convertendo o nome para maiúsculas
        ul.appendChild(li);

        // Filtrando nomes que começam com "A"
        if (lista[i][0].toUpperCase() === "A") {
            convidadosComA.push(lista[i]);
        }

        // Filtrando nomes com mais de 5 letras
        if (lista[i].length > 5) {
            convidadosMaiorQueCinco.push(lista[i]);
        }
    }

    document.getElementById(id).appendChild(ul);
}

// Função para mostrar a lista selecionada e esconder as outras
function mostrarLista(numero) {
    // Ocultar todas as listas
    const listas = document.querySelectorAll('.list-content');
    listas.forEach(list => list.style.display = 'none');
    
    // Mostrar a lista escolhida
    document.getElementById(`list${numero}`).style.display = 'block';

    // Preencher a lista selecionada
    if (numero === 1) {
        imprimirLista('list1', lista1);
    } else if (numero === 2) {
        imprimirLista('list2', lista2);
    } else if (numero === 3) {
        imprimirLista('list3', lista3);
    }

    // Exibir resultados filtrados
    exibirResultados();
}

// Função para exibir os resultados filtrados
function exibirResultados() {
    const startsWithAList = document.getElementById("startsWithA");
    startsWithAList.innerHTML = ''; // Limpar a lista antes de adicionar
    convidadosComA.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome.toUpperCase();
        startsWithAList.appendChild(li);
    });

    const moreThan5LettersList = document.getElementById("moreThan5Letters");
    moreThan5LettersList.innerHTML = ''; // Limpar a lista antes de adicionar
    convidadosMaiorQueCinco.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome.toUpperCase();
        moreThan5LettersList.appendChild(li);
    });
}

// Inicialização: Mostra a Lista 1 ao carregar a página
document.addEventListener("DOMContentLoaded", () => mostrarLista(1));
