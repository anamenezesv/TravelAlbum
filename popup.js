document.querySelectorAll('.item').forEach(function(item, index) {
    item.addEventListener('click', function() {
        // Exibir a modal
        document.getElementById('myModal').style.display = 'block';

        // Carregar o conteúdo de item.html
        fetch('item.html')
            .then(response => response.text())
            .then(data => {
                // Inserir o conteúdo na modal
                document.querySelector('.modal-content').innerHTML = data;
            });
    });
});

// Fechar modal quando o botão de fechar ou o overlay é clicado
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Fechar a modal se o usuário clicar fora dela
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
