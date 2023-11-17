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
const sDireita = document.querySelector(".s_direita");
const sEsquerda = document.querySelector(".s_esquerda");
const bmw = document.querySelector(".bmw");

class CarrosselV2 {
    constructor(img, img1, img2) {
        this.img = img;
        this.img1 = img1;
        this.img2 = img2;
        this.countImg = 0;
        this.changeImage();
    }

    changeImage() {
        switch (this.countImg) {
            case 0: imgCarrosselCar.src = this.img;
                break;
            case 1: imgCarrosselCar.src = this.img1;
                break;
            case 2: imgCarrosselCar.src = this.img2;
        }
    }

    arrowIncrement(arrowElement) {
        arrowElement.addEventListener("click", () => {
            this.countImg++;
            if (this.countImg > 2)
                this.countImg = 0;

            this.setAnimation("passaCarro");
            setTimeout(() => {
                this.changeImage();
            }, 300)

        });
    }

    arrowDecrement(arrowElement) {
        arrowElement.addEventListener("click", () => {
            this.countImg--;
            if (this.countImg < 0)
                this.countImg = 2;

            this.setAnimation("voltaCarro");
            setTimeout(() => {
                this.changeImage();
            }, 300)

        });
    }

    setAnimation(animation) {
        const classes = imgCarrosselCar.classList;
        if (classes.length > 1) {
            imgCarrosselCar.className = classes[0];
            setTimeout(() => {
                imgCarrosselCar.classList.toggle(animation);
            }, 5);
        } else {
            imgCarrosselCar.classList.toggle(animation);
        }
    }
}

const imgs = ["./assets/images/porscheCayenne.webp", "./assets/images/porsche 911.png", "./assets/images/panamera2.png"];

const carrosselPorsche = new CarrosselV2(imgs[0], imgs[1], imgs[2]);
carrosselPorsche.arrowIncrement(sDireita);
carrosselPorsche.arrowDecrement(sEsquerda);
