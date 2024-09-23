// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Variáveis para controlar a pontuação e tentativas
    let score = 0; 
    let attempts = 0;
    const maxAttempts = 5; // Número máximo de tentativas
    const scoreElement = document.getElementById('score'); // Elemento para exibir a pontuação
    const feedbackElement = document.getElementById('feedback'); // Elemento para feedback ao usuário
    const nextLevelBtn = document.getElementById('next-level-btn'); // Botão para avançar ao próximo nível
    const dropzone = document.getElementById('dropzone'); // Área onde os blocos podem ser soltos
    const correctBlock = document.getElementById('correct-block'); // Bloco correto
    const wrongBlock = document.getElementById('wrong-block'); // Bloco errado
    const dragArea = document.querySelector('.drag-area'); // Área de arrastar e soltar
    const blocks = document.querySelector('.blocks'); // Contêiner dos blocos

    // Captura a imagem selecionada na URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedImage = urlParams.get('image');

    // Oculta as imagens e exibe apenas a imagem clicada
    const smallImage1 = document.getElementById('smallImage1');
    const smallImage2 = document.getElementById('smallImage2');
    
    if (selectedImage === '1') {
        smallImage1.style.display = 'block'; // Exibe a primeira imagem
        smallImage2.style.display = 'none'; // Esconde a segunda imagem
        correctBlock.textContent = 'Plant'; // Define o texto do bloco correto
        wrongBlock.textContent = 'Blant'; // Define o texto do bloco errado
    } else if (selectedImage === '2') {
        smallImage1.style.display = 'none'; // Esconde a primeira imagem
        smallImage2.style.display = 'block'; // Exibe a segunda imagem
        correctBlock.textContent = 'Cup'; // Define o texto do bloco correto
        wrongBlock.textContent = 'Cop'; // Define o texto do bloco errado
    }

    // Mostra a área de arrastar e os blocos de resposta
    dragArea.style.display = 'block';
    blocks.style.display = 'flex';

    // Função para atualizar a pontuação
    function updateScore(points) {
        score += points; // Adiciona pontos à pontuação total
        scoreElement.textContent = score; // Atualiza a exibição da pontuação
    }

    // Função para fornecer feedback ao usuário
    function giveFeedback(message, isCorrect) {
        feedbackElement.textContent = message; // Exibe a mensagem de feedback
        feedbackElement.style.color = isCorrect ? 'green' : 'red'; // Define a cor com base na correção
    }

    // Adiciona eventos aos blocos para arrastar
    correctBlock.addEventListener('dragstart', dragStart);
    wrongBlock.addEventListener('dragstart', dragStart);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('drop', drop);

    // Função para iniciar o arrasto
    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id); // Armazena o ID do bloco arrastado
    }

    // Permite que o dropzone aceite o arrasto
    function dragOver(event) {
        event.preventDefault(); // Previne o comportamento padrão para permitir o drop
    }

    // Função para tratar o evento de soltar
    function drop(event) {
        event.preventDefault(); // Previne o comportamento padrão
        const blockId = event.dataTransfer.getData('text'); // Recupera o ID do bloco arrastado

        if (blockId === 'correct-block') {
            updateScore(10); // Atualiza a pontuação se a resposta estiver correta
            giveFeedback('Resposta Correta!', true); // Feedback positivo
            nextLevelBtn.disabled = false; // Habilita o botão para próximo nível
            nextLevelBtn.classList.add('enabled'); // Adiciona classe para estilização
            correctBlock.setAttribute("draggable", "false"); // Desabilita o arrasto do bloco correto
            wrongBlock.setAttribute("draggable", "false"); // Desabilita o arrasto do bloco errado
        } else {
            giveFeedback('Resposta Errada. Tente novamente!', false); // Feedback negativo
            attempts += 1; // Incrementa o número de tentativas
            if (attempts >= maxAttempts) {
                giveFeedback('Máximo de tentativas atingido. Redirecionando para explicação...', false);
                // Redireciona após um pequeno atraso
                setTimeout(() => {
                    window.location.href = `/Explicando/explica.html?image=${selectedImage}`;
                }, 2000);
            }
        }
    }

    // Função para avançar de nível ao clicar no botão
    nextLevelBtn.addEventListener('click', function() {
        window.location.href = `/Explicando/explica.html?image=${selectedImage}`;
    });

    // Eventos de clique para as imagens que redirecionam para os níveis
    smallImage1.addEventListener('click', function() {
        window.location.href = '/Niveis/niveis.html?image=1';
    });

    smallImage2.addEventListener('click', function() {
        window.location.href = '/Niveis/niveis.html?image=2';
    });
});
