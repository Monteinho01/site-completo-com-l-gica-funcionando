// Animação de boas-vindas
window.onload = function() {
  const welcomeTitle = document.getElementById('welcome-title'); // Seleciona o título de boas-vindas
  setTimeout(() => {
      welcomeTitle.style.opacity = '1'; // Define a opacidade para 1 (visível)
      welcomeTitle.style.transform = 'translateY(0)'; // Move o título para sua posição original
  }, 500); // A animação começa após 500 ms
};

// Efeito dinâmico de fundo com alteração de cores
const body = document.body; // Seleciona o corpo da página
const colors = ['#4a90e2', '#6be585', '#ff7373', '#ffcc33']; // Array de cores
let colorIndex = 0; // Índice inicial da cor

function changeBackground() {
  body.style.backgroundColor = colors[colorIndex]; // Altera a cor de fundo
  colorIndex = (colorIndex + 1) % colors.length; // Atualiza o índice para a próxima cor, reiniciando se necessário
}

setInterval(changeBackground, 5000); // Troca de cor a cada 5 segundos
