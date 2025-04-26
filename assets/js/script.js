document.addEventListener("DOMContentLoaded", () => {
    // Elementos
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");
    const navLinks = document.querySelectorAll('.nav-link');
    const verMaisBtn = document.getElementById('verMaisBtn');
    const verMenosBtn = document.getElementById('verMenosBtn');
    const servicosOcultos = document.querySelectorAll('.servico-oculto');

    // Menu mobile
    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
        closeMenu.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    }

    // Links ativos na navegação
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // Mostrar/Ocultar serviços
    if (verMaisBtn && verMenosBtn && servicosOcultos.length > 0) {
        let verMaisAtivo = false;
        
        window.addEventListener('load', () => {
            servicosOcultos.forEach(servico => servico.style.display = 'none');
        });

        verMaisBtn.addEventListener('click', () => {
            verMaisAtivo = true;
            servicosOcultos.forEach(servico => servico.style.display = 'block');
            verMaisBtn.classList.add('hidden');
            verMenosBtn.classList.remove('hidden');
        });

        verMenosBtn.addEventListener('click', () => {
            verMaisAtivo = false;
            servicosOcultos.forEach(servico => servico.style.display = 'none');
            verMaisBtn.classList.remove('hidden');
            verMenosBtn.classList.add('hidden');
        });
    }

    // Configuração do Swiper
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                    const totalSlides = document.querySelectorAll('.swiper-slide').length;
                    if (index < totalSlides) {
                        return `<span class="${className}"></span>`;
                    }
                }
            },
            direction: 'horizontal',
        });
    }

    // Enviar formulário para WhatsApp
    const whatsappForm = document.getElementById("whatsapp-form");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
            const mensagem = document.getElementById("mensagem").value;

            const texto = `Olá, gostaria de solicitar um serviço!\n\n*Nome:* ${nome}\n*Email:* ${email}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem}`;
            const numeroWhatsApp = "5513981146864";
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
            window.open(url, "_blank");
        });
    }

    // Rolagem suave para âncoras
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
});
