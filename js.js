// Mostrar ou esconder o botão de voltar ao topo
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    let backToTopButton = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Voltar ao topo com scroll suave quando o botão for clicado
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Scroll suave para o topo da página
            });
        });
    }
});

// Função para enviar e-mail usando EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("A3XA7os2qylu8muCJ"); // Substitua pela sua Public Key

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            emailjs.sendForm('service_2o3g29v', 'template_ou7derp', this)
                .then(function () {
                    alert('Mensagem enviada com sucesso!');
                }, function (error) {
                    alert('Ocorreu um erro: ' + JSON.stringify(error));
                });
        });
    }
});

// Esconde a barra de navegação após a primeira seção
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.hero-header');
    const heroSection = document.querySelector('.hero');

    if (navbar && heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            navbar.classList.add('invisivel');
        } else {
            navbar.classList.remove('invisivel');
        }
    }
});

// Efeito de rolagem suave nos botões de navegação
document.addEventListener("DOMContentLoaded", function () {
    // Efeito de rolagem suave nos links do menu
    const links = document.querySelectorAll(".nav-link, .btn");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetID = this.getAttribute("href");
            if (targetID && targetID.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetID);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

   
 