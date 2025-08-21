export default class Section{
    constructor({items, renderer}, containerSelector){
        this.items = items;
        this.renderer = renderer;
        this.cardsContainer = document.querySelector(containerSelector);
    };

    // renderiza todos los elementos en la pagina
    renderElement(){
        this.items.forEach((item) => {
            this.renderer(item);
        });
    };

    //toma un elemento del DOM y lo agrega al contenedor
    addItem(item){
        /* const element = this.renderer(item); */
        this.cardsContainer.prepend(item);
    };
    
}

