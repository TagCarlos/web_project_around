import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callback,) {
        super(popupSelector);
        this.handleSubmit = callback;
        this.form = this.popupElement.querySelector(".popup__form");
        this.inputList = this.form.querySelectorAll(".popup__input");

    }
    //recopila datos de todos los campos de entrada
    _getInputValues() {
        const data = {};
        this.inputList.forEach(input => {
            data[input.name] = input.value;
        });
        return data;
    };

    //agrega controlador de eventos submit y click para cerrar
    setEventListeners() {
        this.formElement = this.popupElement.querySelector("form")
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.handleSubmit(this._getInputValues());
        })
    };

    //reinicia el formulario cuando se cierra el popup
    close() {
        super.close();
        this.formSelector.reset();
    };
}
