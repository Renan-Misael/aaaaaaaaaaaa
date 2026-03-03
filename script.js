// Nossa base de dados (Lista de Convidados)
const convidados = ["Ana", "Bruno", "Alice", "Carlos", "Amanda", "Diego", "Elena", "Artur"];

// Selecionando os elementos do HTML
const listaCompletaUI = document.getElementById('lista-completa');
const listaCincoLetrasUI = document.getElementById('lista-cinco-letras');
const contagemAUI = document.getElementById('contagem-a');

let contadorA = 0;

// Parte 1 e 2: Loop para nomes em Maiúsculo e Contagem de nomes com 'A'
convidados.forEach(nome => {
    // Transformar em maiúsculo
    const nomeMaiusculo = nome.toUpperCase();
    
    // Criar item da lista no HTML
    const li = document.createElement('li');
    li.textContent = nomeMaiusculo;
    listaCompletaUI.appendChild(li);

    // Verificar se começa com "A"
    if (nomeMaiusculo.startsWith('A')) {
        contadorA++;
    }
});

// Exibir a contagem total de nomes com A
contagemAUI.textContent = `Total de nomes que começam com "A": ${contadorA}`;

// Parte 3: Filtrar nomes com exatamente 5 letras
const convidadosCincoLetras = convidados.filter(nome => nome.length === 5);

convidadosCincoLetras.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaCincoLetrasUI.appendChild(li);
});
