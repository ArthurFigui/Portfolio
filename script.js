// Seleciona elementos da seção "sobre".
const sobreTexto = document.querySelector('.sobre-mim');
const sobreFoto = document.querySelector('.sobre-foto');
const sobreSection = document.getElementById('sobre');

// Cria um observer para detectar quando a seção "sobre" entra/sai da tela.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            // Se a seção estiver visível, aplica classes de "visível".
            sobreTexto.classList.add('visible');
            sobreTexto.classList.remove('hidden');
            sobreFoto.classList.add('visible');
            sobreFoto.classList.remove('hidden');
        } else { 
            // Se sair da tela, troca para "oculto"
            sobreTexto.classList.add('hidden');
            sobreTexto.classList.remove('visible');
            sobreFoto.classList.add('hidden');
            sobreFoto.classList.remove('visible');
        }
    });
}, {
    threshold: 0.7  // Aqui ativa quando 70% do elemento está visível.
});

observer.observe(sobreSection); // Observa a seção "sobre"


const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const social = document.querySelector('.social');

// Ao clicar no ícone do menu (menu hamburger), alterna a classe "active" da lista de navegação.
menu.addEventListener('click', () => {
    navList.classList.toggle('active');

});


const contatoForm = document.querySelector('#contato form');
const contatoObserver = new IntersectionObserver((entries) => {  // Observer que detecta se o formulário entra na tela.
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Quando visível, aplica animação.
            contatoForm.classList.add('animate');
        } else {  // Remove a animação se sair da tela.
            contatoForm.classList.remove('animate'); 
        }
    });
}, { threshold: 0.3 });  // Ativa com 30% do formulário visível.

contatoObserver.observe(contatoForm);

const projetos = document.querySelectorAll(".projetos");

const projetosObserver = new IntersectionObserver((entries) => { // Observer para os cards de projetos.
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Quando o card entra na tela → aplica a classe "show" (aparece com efeito).
            entry.target.classList.add("show");
        } else {  // Sai da tela remove o efeito.
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.2 }); // Ativa com 20% do card visível

projetos.forEach(projeto => projetosObserver.observe(projeto));