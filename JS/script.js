const imagem = document.getElementById('minhaImagem');
const imagemContainer = document.querySelector('.imagem-container');

imagemContainer.addEventListener('mouseover', () => {
    imagem.classList.add('girando');
});

imagemContainer.addEventListener('mouseout', () => {
    imagem.classList.remove('girando');
});
