const sobreTexto = document.querySelector('.sobre-mim');
const sobreFoto = document.querySelector('.sobre-foto');
const sobreSection = document.getElementById('sobre');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            sobreTexto.classList.add('visible');
            sobreTexto.classList.remove('hidden');
            sobreFoto.classList.add('visible');
            sobreFoto.classList.remove('hidden');
        } else { 
            sobreTexto.classList.add('hidden');
            sobreTexto.classList.remove('visible');
            sobreFoto.classList.add('hidden');
            sobreFoto.classList.remove('visible');
        }
    });
}, {
    threshold: 0.7
});

observer.observe(sobreSection);

const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const social = document.querySelector('.social');

menu.addEventListener('click', () => {
    navList.classList.toggle('active');

});

const contatoForm = document.querySelector('#contato form');
const contatoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contatoForm.classList.add('animate');
        } else {
            contatoForm.classList.remove('animate'); 
            // se não quiser repetir, basta comentar esta linha
        }
    });
}, { threshold: 0.3 });

contatoObserver.observe(contatoForm);