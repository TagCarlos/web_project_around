//estandarizacion todos los formularios

function enableValidation() {
  const formList = document.querySelectorAll("form")
  console.log("formList", formList)

  formList.forEach(function (form) {
    const inputList = Array.from(form.querySelectorAll("input")); //enableValidation.inputSelector
    setEventListener(form, inputList); //agregar enableValidation
});

function setEventListener(form, inputList) {
  const buttonElement = form.querySelector(".popup__button_save"); //enableValidation.submitButtonSelector
  validateButton(buttonElement, inputList);
  form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    inputList.forEach(function (input) {input.addEventListener("input", function () {
      showInputError(input);
      validateButton(buttonElement, inputList);
    });});
    document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeModal();
  } 
});
  }
}

function validateButton(buttonElement, inputList) {
  if(checkInputsValidity(inputList)){
    buttonElement.classList.add("popup__button_save:disabled")
  } else{
    buttonElement.classList.remove("popup__button_save:disabled")
  }
}  

function checkInputsValidity(inputList) {
  return inputList.some(function(input)
  {return !input.validity.valid});
}

function showInputError(input) {
  const spanElement = document.querySelector(`#${input.id}-error`);
  spanElement.textContent = input.validationMessage;
}

enableValidation();

//cerrar ventana de las imagenes con Esc y overlay
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});