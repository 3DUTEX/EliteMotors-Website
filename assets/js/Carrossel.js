class Carrossel {
    constructor(carrossel) {
        //div que abrange as imagens
        this.carrossel = carrossel;
        //quantidade que irá ser scrollada é igual ao tamanho da div do carrossel
        this.qtdScroll = this.carrossel.clientWidth;

        //quantidade máxima de scroll é o tamanho da div multiplicado pelo número de imagens que tem dentro da div
        this.maxScroll = this.qtdScroll * this.carrossel.querySelectorAll("div").length;

        //variável de controle para saber o quanto foi scrollado
        this.totalScroll = 0;
    }

    comIntervalo(intervalo) {
        setInterval(() => {
            console.log(totalImagens.length);

            //se o total Scrollado for maior que o máximo, volta para a estaca zero
            if (this.totalScroll >= this.maxScroll) this.totalScroll = 0;

            //scrolla a div de acordo com o total scrollado
            this.carrossel.scrollTo(this.totalScroll, 0);

            //a cada volta do intervalo o total Scrollado recebe a quantidade que deve scrollar
            this.totalScroll += this.qtdScroll;
        }, intervalo);
    }
}

export default Carrossel;