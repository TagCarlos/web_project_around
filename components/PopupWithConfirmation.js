import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this.confirmButton = this.popupElement.querySelector(".popup__confirm-button");
    }

    setEventListeners(){
        
    }

    setHandleConfirm(confirm){
        this.handleConfirm = confirm
    }

    // Método para establecer qué acción ejecutar al confirmar
    setConfirmAction(action) {
        this._handleConfirm = action;
    }

    // Método que se ejecuta cuando el usuario confirma
    _handleConfirmClick() {
        if (typeof this._handleConfirm === 'function') {
            this._handleConfirm();
        }
    }

    handleConfirm(action, apiDeleteCard){
        super.setEventListeners();
        this.confirmButton.addEventListener("click", ()=>{
            action();
            apiDeleteCard();
            this.close();
        })
        /* console.log("borrando desde popupWithConfirmation")
        action(); */
    } 

}