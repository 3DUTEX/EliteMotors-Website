let countImg = 0;
const { img, img1, img2, nm, nm1, nm2 } = carParams;

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

function arrowIncrement(arrowElement) {
    arrowElement.addEventListener("click", () => {
        countImg++;
        if (countImg > 2)
            countImg = 0;

        setAnimation("passaCarro");
        setTimeout(() => {
            changeDetails();
        }, 300)

    });
}

function arrowDecrement(arrowElement) {
    arrowElement.addEventListener("click", () => {
        countImg--;
        if (countImg < 0)
            countImg = 2;

        setAnimation("voltaCarro");
        setTimeout(() => {
            changeDetails();
        }, 300)

    });
}

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