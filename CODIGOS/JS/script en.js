
// Função para recarregar a página e retração suave do menu
function recarregarPagina() {
    
    menuSide.classList.remove('expandir');

    
    setTimeout(() => {
        location.reload();
    }, 850);
}

// marca a seleção

var menuItem = document.querySelectorAll('.menu-item')
function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

// Seleciona os elementos
var expan = document.querySelector('#expan');
var menuSide = document.querySelector('.menu-lateral');
var menuLinks = menuSide.querySelectorAll('.menu-item a');

expan.addEventListener('click', function (event) {
    menuSide.classList.toggle('expandir');
});

// Fecha o menu se clicar fora dele
document.addEventListener('click', function (event) {
    if (!menuSide.contains(event.target) && !expan.contains(event.target)) {
        menuSide.classList.remove('expandir');
    }
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function() {
        menuSide.classList.remove('expandir');
    });
});


//  BOTÃO DE ALTERNAR O TEMA

const button = document.getElementById("theme-toggle");
const body = document.body;

// Verificar se há preferência salva
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Alternar tema e salvar preferência
button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// MODULAR TEXT - Ícones de conhecimento
function changeInfoText(text) {
    document.getElementById('infoText').innerText = text;
}

function resetInfoText() {
    document.getElementById('infoText').innerText = 'Hover over the icons for more information.';
}

// MODULAR TEXT 2 - TECNOLOGIA
function changeTCText(text) {
    document.getElementById('TCText').innerText = text;
}

function resetTCText() {
    document.getElementById('TCText').innerText = '[Technology Name]';
}

// MODULAR TEXT 2 - NIVEL
function changeNvText(text) {
    document.getElementById('NvText').innerText = text;
}

function resetNvText() {
    document.getElementById('NvText').innerText = '[Basic / Intermediate / Advanced]';
}

// MODULAR TEXT 2 - PROFICIENCIA
function changePFText(text) {
    document.getElementById('PFText').innerText = text;
}

function resetPFText() {
    document.getElementById('PFText').innerText = '[XX%]';
}

// MODULAR TEXT 2 - EXPERIENCIA
function changeXPText(text) {
    document.getElementById('XPText').innerText = text;
}

function resetXPText() {
    document.getElementById('XPText').innerText = '[My experience with the technology]';
}

// CARROSEU
new Swiper('.projetossection', {
    loop: true,
    speed: 100,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: { slidesPerView: 1, spaceBetween: 30 },
        880: { slidesPerView: 2, spaceBetween: 30 },
        1200: { slidesPerView: 3, spaceBetween: 10 },
    }
});

