const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});

// Script para ativar o link ativo
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

const verMaisBtn = document.getElementById('verMaisBtn');
const verMenosBtn = document.getElementById('verMenosBtn');
const servicosOcultos = document.querySelectorAll('.servico-oculto');
let verMaisAtivo = false;

// Verifica que os serviços ocultos estão inicialmente escondidos com display: none
window.addEventListener('load', () => {
    servicosOcultos.forEach(servico => {
        servico.style.display = 'none';
    });
});

verMaisBtn.addEventListener('click', () => {
    verMaisAtivo = true;

    // Alterna a visibilidade dos serviços ocultos
    servicosOcultos.forEach(servico => {
        servico.style.display = 'block';
    });

    // Esconde o botão "Ver Mais" e mostra o botão "Ver Menos"
    verMaisBtn.classList.add('hidden');
    verMenosBtn.classList.remove('hidden');
});

verMenosBtn.addEventListener('click', () => {
    verMaisAtivo = false;

    // Oculta os serviços novamente
    servicosOcultos.forEach(servico => {
        servico.style.display = 'none';
    });

    // Esconde o botão "Ver Menos" e mostra o botão "Ver Mais"
    verMaisBtn.classList.remove('hidden');
    verMenosBtn.classList.add('hidden');
});
const swiper = new Swiper(".mySwiper", {
    loop: true, // Ativa o loop para navegação contínua
    spaceBetween: 30, // Espaço entre os slides
    pagination: {
        el: ".swiper-pagination", // Ponto de navegação
        clickable: true, // Permite clicar nos pontos
        dynamicBullets: true, // Ajusta as bolinhas de navegação dinamicamente
        renderBullet: function (index, className) {
            // A quantidade de bolinhas será ajustada conforme o número de slides
            const totalSlides = 3;
            if (index < totalSlides) {
                return '<span class="' + className + '"></span>';
            }
        }
    },
    // Definindo a direção de navegação para permitir swipes em ambos os sentidos
    direction: 'horizontal',  // Assegura que a navegação seja horizontal
});

document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio tradicional do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, gostaria de solicitar um serviço!\n\n*Nome:* ${nome}\n*Email:* ${email}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem}`;

    const numeroWhatsApp = "5513981146864";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }

        history.pushState(null, null, ' ');
    });
});
