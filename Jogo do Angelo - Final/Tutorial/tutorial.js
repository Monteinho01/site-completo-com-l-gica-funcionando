// Variáveis para controlar se as imagens já foram clicadas
let image1Clicked = localStorage.getItem('image1Clicked') === 'true';
let image2Clicked = localStorage.getItem('image2Clicked') === 'true';

// Função para desativar o clique em uma imagem e alterar seu estilo
function disableImageClick(imageElement) {
    imageElement.style.pointerEvents = 'none'; // Impede que a imagem seja clicada novamente
    imageElement.style.opacity = '0.5'; // Reduz a opacidade para indicar que foi clicada
}

// Função para verificar se ambas as imagens foram clicadas e redirecionar para a página final
function checkBothImagesClicked() {
    if (image1Clicked && image2Clicked) {
        localStorage.setItem('tutorialCompleted', 'true'); // Marca que o tutorial foi completado
        setTimeout(() => {
            window.location.href = '/Final/final.html'; // Redireciona para a página final após um breve atraso
        }, 500); // 500 ms de atraso para dar tempo do usuário ver as interações
    }
}

// Função para desativar as imagens que já foram clicadas ao carregar a página
function disableClickedImages() {
    const image1 = document.getElementById('smallImage1');
    const image2 = document.getElementById('smallImage2');

    if (image1Clicked) {
        disableImageClick(image1);
    }

    if (image2Clicked) {
        disableImageClick(image2);
    }

    // Verifica se ambas as imagens foram clicadas
    checkBothImagesClicked();
}

// Evento de clique para a primeira imagem
document.getElementById('smallImage1').addEventListener('click', function() {
    if (!image1Clicked) { // Verifica se já foi clicada
        image1Clicked = true;
        localStorage.setItem('image1Clicked', 'true'); // Salva no localStorage
        disableImageClick(this); // Desativa o clique
        // Redireciona para niveis.html
        window.location.href = '/Niveis/niveis.html?image=1'; // Redireciona para niveis.html
    }
});

// Evento de clique para a segunda imagem
document.getElementById('smallImage2').addEventListener('click', function() {
    if (!image2Clicked) { // Verifica se já foi clicada
        image2Clicked = true;
        localStorage.setItem('image2Clicked', 'true'); // Salva no localStorage
        disableImageClick(this); // Desativa o clique
        // Redireciona para niveis.html
        window.location.href = '/Niveis/niveis.html?image=2'; // Redireciona para niveis.html
    }
});

// Executa a verificação ao carregar a página
disableClickedImages();
