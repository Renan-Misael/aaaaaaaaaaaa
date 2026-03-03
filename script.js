// Lista inicial de convidados
const convidados = [
  "Ana", "Carlos", "João", "Mariana", "André", "Lucas", "Pedro", "Amanda", "Roberta", "Alberto"
];

// Função para imprimir os nomes na tabela
function printNames(names) {
  const tbody = document.querySelector("#convidados tbody");
  tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os novos nomes

  // Se não houver resultados para o filtro, exibe uma mensagem
  if (names.length === 0) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'Nenhum convidado encontrado';
    td.colSpan = 1;  // Fazer o texto ocupar toda a largura da tabela
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    names.forEach(name => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.textContent = name.toUpperCase(); // Converte o nome para maiúsculas
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
  }
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
  let filteredNames = [];

  switch(type) {
    case 'startsWithA':
      filteredNames = filterStartsWithA();
      break;
    case 'allUppercase':
      filteredNames = filterAllUppercase();
      break;
    case 'fiveLetters':
      filteredNames = filterFiveLetters();
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
