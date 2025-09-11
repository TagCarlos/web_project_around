import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this.ImageElement = this.popupElement.querySelector(".popup__image");
        this.leyendElement = this.popupElement.querySelector(".popup__title_image");
    }
    
    //añade imagen al popup con src y leyenda de la imagen
    open(link, leyend){
        super.open();
        this.ImageElement.src = link;
        this.leyendElement.textContent = leyend;
    };
}