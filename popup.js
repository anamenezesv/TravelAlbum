// document.addEventListener("DOMContentLoaded", function () {
//     const items = document.querySelectorAll(".item");
//     const popup = document.getElementById("popup");
//     const popupFrame = document.getElementById("popupFrame");
//     const closePopup = document.getElementById("closePopup");

//     items.forEach((item) => {
//         item.addEventListener("click", () => {
//             const itemId = item.getAttribute("data-item-id");
//             const itemSrc = `item.html`; // Supondo que seus arquivos se chamem item1.html, item2.html, etc.
//             popupFrame.src = itemSrc;
//             popup.classList.add("show-popup");
//         });
//     });

//     closePopup.addEventListener("click", () => {
//         popup.classList.remove("show-popup");
//     });
// });

// Quando um item é clicado
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

// Quando o botão de fechar ou o overlay é clicado
document.getElementById('closeModal').addEventListener('click', function() {
    // Ocultar a modal
    document.getElementById('myModal').style.display = 'none';
});

// Fechar a modal se o usuário clicar fora dela
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
