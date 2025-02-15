document.querySelector('form').addEventListener('click', function(event) {
    event.preventDefault();
})

function adicionarImagemURL() {
    const urlInput = document.getElementsByClassName('url')[0]; // Pega o primeiro elemento com a classe 'url'
    if (!urlInput) {
        console.error("Elemento com classe 'url' não encontrado.");
        return;
    }
    const url = urlInput.value;
    if (url === '') {
        alert('Por favor, insira uma URL.');
        return;
    }
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagem da URL';
    img.classList.add('card-img');
    img.onerror = () => {
        alert('Erro ao carregar imagem da URL.');
    };

    document.getElementById('imagens').appendChild(img);
    urlInput.value = ''; // Limpa o campo de URL
}
    function toggleMenu() {
        const menu = document.getElementById("menu");
        const isMenuOpen = menu.style.display === "block";
      
        if (isMenuOpen) {
          menu.style.display = "none";
          menu.style.animation = " scale-in-top  1.5s"; // Adiciona transição ao fechar
        } else {
          menu.style.display = "block";
          menu.style.transition = "all 1.5s"; // Adiciona transição ao abrir
        }
    }

