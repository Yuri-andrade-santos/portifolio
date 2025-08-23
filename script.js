// Aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', () => {

    // ================== NAVEGAÇÃO ATIVA AO ROLAR A PÁGINA ==================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // O '150' é um valor de offset, ajuste se necessário
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Verifica se o href do link corresponde à seção atual
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ================== EFEITO DE ANIMAÇÃO AO ROLAR (FADE-IN) ==================
    // Cria um 'observador' que vai monitorar os elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Opcional: remover a classe para animar novamente se sair e voltar
                // entry.target.classList.remove('show'); 
            }
        });
    });

    // Seleciona todos os elementos que você quer animar
    const hiddenElements = document.querySelectorAll('.section-content, .project-card, .hero-content');
    
    // Pede ao observador para monitorar cada um desses elementos
    hiddenElements.forEach((el) => observer.observe(el));

    // ================== MENU HAMBÚRGUER ==================
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // ================== FECHAR MENU AO CLICAR EM UM LINK ==================
    // Seleciona todos os links da navbar
    const navLinksMobile = document.querySelectorAll('.navbar a');

    // Adiciona um evento de clique a cada link
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            // Se o menu estiver aberto, fecha ele
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
    });
    
});