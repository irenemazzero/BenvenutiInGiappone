document.addEventListener("DOMContentLoaded", function() {
    // Gestione del carosello
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-img');

    // Nascondi tutte le immagini tranne quella corrente all'inizio
    images.forEach((img, index) => {
        if (index !== currentImageIndex) {
            img.classList.add('hidden');
        }
    });

    function showNextImage() {
        // Nascondi l'immagine corrente
        images[currentImageIndex].classList.add('hidden');

        // Passa all'indice dell'immagine successiva
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Mostra l'immagine successiva rimuovendo la classe .hidden
        images[currentImageIndex].classList.remove('hidden');
    }

    // Esegui showNextImage ogni 3000 millisecondi (3 secondi)
    setInterval(showNextImage, 3000);

    // Gestione del toggle dell'elemento
    document.querySelectorAll("[data-toggle]").forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("expanded");
            const indicator = this.querySelector(".toggle-indicator");
            const extraContent = this.querySelector(".extra-content");
            if (this.classList.contains("expanded")) {
                indicator.innerHTML = "Mostra meno &#9650;"; // Freccia verso l'alto
                extraContent.style.maxHeight = extraContent.scrollHeight + "px"; // Dinamicamente setta l'altezza massima
            } else {
                indicator.innerHTML = "Scopri di più &#9660;"; // Freccia verso il basso
                extraContent.style.maxHeight = "0";
            }
        });
    });

    // Gestione dello scroll per evitare che l'header copra la sezione
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
