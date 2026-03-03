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

// Função para filtrar nomes que estão em maiúsculas (tudo em maiúsculas)
function filterAllUppercase() {
  return convidados.filter(name => name === name.toUpperCase());
}

// Função para filtrar nomes que têm exatamente 5 letras
function filterFiveLetters() {
  return convidados.filter(name => name.length === 5);
}

// Função para mostrar a lista conforme o tipo
function showList(type) {
  switch(type) {
    case 'startsWithA':
      printNames(filterStartsWithA());
      break;
    case 'allUppercase':
      printNames(filterAllUppercase());
      break;
    case 'fiveLetters':
      printNames(filterFiveLetters());
      break;
    default:
      printNames(convidados); // Se for outro tipo, mostra todos os nomes
  }
}

// Mostrar todos os convidados ao carregar a página
window.onload = function() {
  printNames(convidados);
}
