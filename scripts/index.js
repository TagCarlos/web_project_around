let openButton = document.querySelector("#edit");
let popupForm = document.querySelector(".popup");
let closeButton = document.querySelector("#save");
let closeButton2 = document.querySelector(".popup__close");

//abre formulario
function abrirFormulario() {
  popupForm.classList.add("popup_opened");
}
//cierra formulario
console.log(openButton)
function cerrarFormulario() {
   popupForm.classList.remove("popup_opened");
}

openButton.addEventListener("click", abrirFormulario);
closeButton.addEventListener("click", cerrarFormulario);
closeButton2.addEventListener("click", cerrarFormulario);

closeButton.addEventListener("submit", function (evt) {
   evt.preventDefault();
   let name = document.querySelector("#name").value;
   let about = document.querySelector("#about").value;

  name.textContent = nombre;
  about.textContent = mensaje;
   cerrarFormulario();
});

//editar nombre y sobre mi

let formElement = document.querySelector("#form") 

function handleProfileFormSubmit(evt) {
   
    evt.preventDefault();
    
    let nameInput = document.querySelector("#name");
    let jobInput = document.querySelector("#about");
    let nameDisplay = document.querySelector(".header__name"); 
    let jobDisplay = document.querySelector(".header__activity");
    console.log(jobInput)
    console.log(jobDisplay)

    nameDisplay.textContent = nameInput.value;
    jobDisplay.textContent = jobInput.value;
    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);