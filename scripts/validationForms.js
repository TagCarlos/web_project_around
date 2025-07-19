//validacion de formularios
const inputList = Array.from(form.querySelectorAll("input"));
const spanMessageName = document.querySelector(".label__name");
const spanMessageAbout = document.querySelector(".label__about");
const modalOverlay = document.querySelector("#modalOverlay");

//evento para cuando el usuario escribe en el nombre
function validateInput(input) {
  const span = document.querySelector(`#${input.id}-error`)
  if (!input.validity.valid) {
    span.textContent = input.validationMessage;
    
  } else {
    span.textContent = "";
  }
} 

// da verdad o falso en los inputs
function validateAllInputs() {
  const areAllInputsValid = inputList.some(function (input) {
    return !input.validity.valid;
  });
  return areAllInputsValid;
}

function toggleButton() {
  if (!validateAllInputs()) {
    closeButton.disabled = false;
  } else {
    closeButton.disabled = true;
  }
}
toggleButton();

inputList.forEach(function(input){
input.addEventListener("input", function () {
  validateInput(input);
  toggleButton();
})
})

//cerrar popup fuera del contenido
modalOverlay.addEventListener("click", function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
function closeModal() {
  modalOverlay.classList.remove("popup_opened");
}

// cerrar popup con tecla de esc
document.addEventListener("keydown", function name(evt) {
  if (evt.key === "Escape") {
    closeModal();
  } 
});

// crear una funcion general para todos los formularios 
/* const forms = document.querySelector(".popup__form");
const nameInputForm = document.querySelector("#name");
const aboutInputForm = document.querySelector("#about");
const nameInputError = document.querySelector("#name-error");

nameInputForm.addEventListener("input", function () {
  nameInputError.textContent = nameInputForm.validateMessage;
});

aboutInputForm.addEventListener("input", function () {});

forms.addEventListener("submit" function (e) {
  evt.preventDefault();
}); */


//aqui se empieza a estandarizar todos los formularios
function enableValidation() {
  const formList = document.querySelectorAll("form")

  formList.forEach(function (form) {
    const inputList = Array.from(form.querySelectorAll("input"));
    setEventListener(form, inputList);
});

function setEventListener(form, inputList) {
  const buttonElement = form.querySelector(".popup__save");
  validateButton(buttonElement, inputList);
  form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    inputList.forEach(function (input) {});
    input.addEventListener("input", function () {
      showInputError(input);
      validateButton(buttonElement, inputList);
    });
  }
}

function validateButton(buttonElement, inputList) {
  if(checkInputsValidity(inputList)){
    buttonElement.classList.add("popup__save:disabled")
  } else{
    buttonElement.classList.remove("popup__save:disabled")
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