// Lista inicial de convidados
const convidados = [
  "Ana", "Carlos", "João", "Mariana", "André", "Lucas", "Pedro", "Amanda", "Roberta", "Alberto"
];

// Função para imprimir todos os nomes em maiúsculas
function printNames(names) {
  const tbody = document.querySelector("#convidados tbody");
  tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os novos nomes

  names.forEach(name => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = name.toUpperCase(); // Converte o nome para maiúsculas
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
}

// Função para filtrar nomes que começam com a letra 'A'
function filterStartsWithA() {
  return convidados.filter(name => name[0].toUpperCase() === 'A');
}

// Função para filtrar nomes que têm mais de 5 letras
function filterMoreThanFive() {
  return convidados.filter(name => name.length > 5);
}

// Função de range (simulando um intervalo de 1 a N)
function range(n) {
  return [...Array(n).keys()].map(i => i + 1);
}

// Função para mostrar a tabela com base no tipo de filtro
function showList(type) {
  let filteredNames = [];

  switch(type) {
    case 'startsWithA':
      filteredNames = filterStartsWithA();
      break;
    case 'moreThanFive':
      filteredNames = filterMoreThanFive();
      break;
    default:
      filteredNames = convidados;
  }

  printNames(filteredNames);
}

// Mostrar todos os convidados ao carregar a página
window.onload = function() {
  printNames(convidados);
}
