export default class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        
        if (!this.popupElement) {
            
        }
        this.popupElement = document.querySelector(popupSelector);
        this.formSelector = this.popupElement.querySelector("form");
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    };

    //abre los popups
    open() {
        
        this.popupElement.classList.add("popup_opened");
        this.popupElement.classList.add("modalOverlay");
        document.addEventListener('keydown', this._handleEscClose);
    };

    //cierra los popups
    close() {
         
        this.popupElement.classList.remove("popup_opened");
        this.popupElement.classList.remove("modalOverlay");
        document.removeEventListener('keydown', this._handleEscClose);
    };

    //cierra popups al pulsar tecla Esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    };

    //cierra popups al presionar por fuera
    handleClickOutside(event) {
        if (event.target.classList.contains("modalOverlay")) {
            this.close();
        }
    };

    //agrega detector de eventos para cerrar popup
    setEventListeners() {
        this.popupElement.addEventListener("click", (event) => { this.handleClickOutside(event) });
        this.btnClosePopup = this.popupElement.querySelector(".popup__button_close");
        this.btnClosePopup.addEventListener("click", () => { this.close() });
        this.popupElement.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    };
}