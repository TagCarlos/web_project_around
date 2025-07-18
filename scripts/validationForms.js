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