// Aguarda o carregamento completo do DOM para garantir que todos os elementos estejam disponíveis para manipulação
document.addEventListener('DOMContentLoaded', () => {
    // Obtém os parâmetros da URL, que podem conter informações úteis
    const urlParams = new URLSearchParams(window.location.search);
    
    // Extrai o valor do parâmetro 'image' da URL, que indica qual imagem foi selecionada
    const selectedImage = urlParams.get('image');
    
    // Obtém referências aos elementos da página que serão manipulados
    const explanationImage = document.getElementById('explanationImage'); // Elemento de imagem para exibir a imagem explicativa
    const explanationText = document.getElementById('explanationText'); // Elemento de texto para exibir a explicação
    const returnBtn = document.getElementById('returnBtn'); // Botão para retornar à página anterior

    // Função para configurar a explicação com base na imagem selecionada
    function setupExplanation() {
        // Verifica qual imagem foi selecionada e configura a explicação correspondente
        if (selectedImage === '1') {
            // Configura a imagem e o texto para a primeira imagem
            explanationImage.src = '/Imagens/imagem-tutorial-pequena.png';
            explanationText.innerHTML = `
                <h2>Palavra Certa: Plant</h2>
                <p>Como utilizar: "The plant needs water to grow."</p>
                <p>Origem: A palavra "plant" vem do latim "planta".</p>
                <p>Definição: Uma planta é um organismo vivo que realiza fotossíntese.</p>
                <p>Sinônimos: <strong>Inglês:</strong> vegetation, flora. <strong>Português:</strong> vegetação, flora.</p>
            `;
        } else if (selectedImage === '2') {
            // Configura a imagem e o texto para a segunda imagem
            explanationImage.src = '/Imagens/imagem-tutorial-pequena2.png';
            explanationText.innerHTML = `
                <h2>Palavra Certa: Cup</h2>
                <p>Como utilizar: "I drank tea from my favorite cup."</p>
                <p>Origem: A palavra "cup" vem do inglês antigo "cūppa".</p>
                <p>Definição: Um copo ou xícara é um recipiente usado para beber líquidos.</p>
                <p>Sinônimos: <strong>Inglês:</strong> mug, vessel. <strong>Português:</strong> xícara, recipiente.</p>
            `;
        }
    }

    // Adiciona um evento de clique ao botão de retorno para redirecionar o usuário
    returnBtn.addEventListener('click', () => {
        window.location.href = '/Tutorial/tutorial.html'; // Redireciona para a página de tutorial
    });

    // Chama a função para configurar a explicação assim que a página for carregada
    setupExplanation();
});
