// BARRA DE NAVEGAÇÃO
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// CARROSSEL
class Carrossel {
    constructor(carrossel, type) {
        //div que abrange as imagens
        this.carrossel = carrossel;
        //quantidade que irá ser scrollada é igual ao tamanho da div do carrossel
        this.qtdScroll = this.carrossel.clientWidth;

        //quantidade máxima de scroll é o tamanho da div multiplicado pelo número de imagens que tem dentro da div
        this.maxScroll = this.qtdScroll * this.carrossel.querySelectorAll(type).length;

        //variável de controle para saber o quanto foi scrollado
        this.totalScroll = 0;
    }

    comIntervalo(intervalo) {
        setInterval(() => {

            //se o total Scrollado for maior que o máximo, volta para a estaca zero
            if (this.totalScroll >= this.maxScroll) this.totalScroll = 0;

            //scrolla a div de acordo com o total scrollado
            this.carrossel.scrollTo(this.totalScroll, 0);

            //a cada volta do intervalo o total Scrollado recebe a quantidade que deve scrollar
            this.totalScroll += this.qtdScroll;
        }, intervalo);
    }
}

const carrosselMainDiv = document.querySelector(".carrossel-main");
const carrosselMain = new Carrossel(carrosselMainDiv, "div");
carrosselMain.comIntervalo(2000);

// CARROSSEL CARROS
const imgCarrosselCar = document.querySelector(".imgCarrosselCarro");
const nomeCarro = document.querySelector(".nome-carro");
const sDireita = document.querySelector(".s_direita");
const sEsquerda = document.querySelector(".s_esquerda");

let countImg = 0;
let carParams = {
    img: "./assets/images/porscheCayenne.webp",
    img1: "./assets/images/porsche 911.png",
    img2: "./assets/images/panamera2.png",
    nm: "Porsche Cayenne",
    nm1: "Porsche 911",
    nm2: "Panamera",
}
let { img, img1, img2, nm, nm1, nm2 } = carParams;

changeDetails();

function changeDetails() {
    switch (countImg) {
        case 0: imgCarrosselCar.src = img;
            nomeCarro.textContent = nm;
            break;
        case 1: imgCarrosselCar.src = img1;
            nomeCarro.textContent = nm1;
            break;
        case 2: imgCarrosselCar.src = img2;
            nomeCarro.textContent = nm2;
    }
}


sDireita.addEventListener("click", () => {
    countImg++;
    if (countImg > 2)
        countImg = 0;

    setAnimation("passaCarro");
    setTimeout(() => {
        changeDetails();
    }, 300)

});


sEsquerda.addEventListener("click", () => {
    countImg--;
    if (countImg < 0)
        countImg = 2;

    setAnimation("voltaCarro");
    setTimeout(() => {
        changeDetails();
    }, 400);

});


function setAnimation(animation) {
    const classes = imgCarrosselCar.classList;
    if (classes.length > 1) {
        imgCarrosselCar.className = "imgCarrosselCarro";
        setTimeout(() => {
            imgCarrosselCar.classList.toggle(animation);
        }, 5);
    } else {
        imgCarrosselCar.classList.toggle(animation);
    }
}

function selectBrand(brand) {
    if (brand == "porsche") {
        img = "./assets/images/porscheCayenne.webp";
        img1 = "./assets/images/porsche 911.png";
        img2 = "./assets/images/panamera2.png";
        nm = "Porsche Cayenne";
        nm1 = "Porsche 911";
        nm2 = "Panamera";
    } else if (brand == "audi") {
        img = "./assets/images/audi r8.png";
        img1 = "./assets/images/audi rs6.png";
        img2 = "./assets/images/audi rs7.png";
        nm = "Audi R8";
        nm1 = "Audi RS6";
        nm2 = "Audi RS7";
    } else {
        img = "./assets/images/porscheCayenne.webp";
        img1 = "./assets/images/porsche 911.png";
        img2 = "./assets/images/panamera2.png";
        nm = "Porsche Cayenne";
        nm1 = "Porsche 911";
        nm2 = "Panamera";
    }

    changeDetails();
};

// ANIMAÇÃO AO ROLAR
document.addEventListener("scroll", (e) => {
    const localDiv = document.querySelector(".redirect-container");
    const qtdScrollY = scrollY;

    if (qtdScrollY >= 1200)
        makeVisibleAnimation(localDiv);
})

// FAZ APARECER ELEMENTO
function makeVisibleAnimation(element) {
    element.style.visibility = "visible";
    element.style.animation = "500ms ease 0s aparecendo";
}