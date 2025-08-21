export default class FormValidator {
  constructor(configuration) {
    this._configuration = configuration;
    this._formElement = document.querySelector(configuration.formSelector);
  }

  /**
   * This is private method for show input error.
   * @param {*} input this is input
   */

  _showInputError(input) {
    this.spanElement = document.querySelector(`#${input.id}-error`);
    this.spanElement.textContent = input.validationMessage;
  }

  /**
   * 
   * @returns 
   */
  _checkInputsValidity() {
    return this.inputList.some(function (input) {
      return !input.validity.valid;
    });
  }

  /**
   * 
   */
  _setEventListener() {
    this.buttonElement = this._formElement.querySelector(
      this._configuration.submitButtonSelector
    );
    this._validateButton(this.buttonElement, this.inputList);
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._showInputError(input);
        this._validateButton(this.buttonElement, this.inputList);
      });
    });
  }
  _validateButton() {
    if (this._checkInputsValidity(this.inputList)) {
      this.buttonElement.classList.add("popup__button_save_disabled");
    } else {
      this.buttonElement.classList.remove("popup__button_save_disabled");
    }
  }

  enableValidation() {
    this.inputList = Array.from(this._formElement.querySelectorAll("input"));
    this._setEventListener();
  }
}
