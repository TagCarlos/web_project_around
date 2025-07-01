let openButton = document.querySelector("#edit");
let popupForm = document.querySelector(".popup");
let closeButton = popupForm.querySelector("#save");
let closeButton2 = popupForm.querySelector(".popup__close");

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

// crea tarjetas
const templateCard = document.querySelector(".template__card")
const cardsList = document.querySelector(".container");
const initialCards = [
  {
    name: "Ciudad de México",
    link: "https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Guadalajara",
    link: "https://images.unsplash.com/photo-1561788655-79bf50b6b174?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Monterrey",
    link: "https://images.unsplash.com/photo-1618950399704-86fb060cd003?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Yucatán",
    link: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chiapas",
    link: "https://images.unsplash.com/photo-1597177549158-a92ded9f5436?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Chihuahua",
    link: "https://images.unsplash.com/photo-1691560284809-15b2a260d881?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

initialCards.forEach(function(item) {
   createCard(item.name, item.link);
}); 

function createCard(name, link){
   const clonedCard = templateCard.content.querySelector(".container__cards").cloneNode(true);
   const cardTitle = clonedCard.querySelector(".container__title");
   const cardImage = clonedCard.querySelector(".container__image");
   const cardLikeButton = clonedCard.querySelector(".container__heart");
console.log(clonedCard);
   cardTitle.textContent = name;
   cardImage.src = link;
   cardsList.append(clonedCard);
   cardLikeButton.addEventListener("click", function() {
    cardLikeButton.classList.toggle("container__heart_active") // <--- aqui dentro se debe crear la clase con el nuevo diseño "osea colocar la imagen con el corazon relleno"
   })
}

//crea formulario para añadir tarjeta
let openButton2 = document.querySelector("#add-image");
let popupForm2 = document.querySelector("#popup");
let closeButtonImage = popupForm2.querySelector("#save");
let closeButtonImage2 = popupForm2.querySelector(".popup__close");

function abrirFormulario2() {
  popupForm2.classList.add("popup_opened");
}
function cerrarFormulario2() {
   popupForm2.classList.remove("popup_opened");
}

openButton2.addEventListener("click", abrirFormulario2);
closeButtonImage.addEventListener("click", cerrarFormulario2);
closeButtonImage2.addEventListener("click", cerrarFormulario2);

closeButtonImage.addEventListener("submit", function (evt) {
   evt.preventDefault();
   let title = document.querySelector("#title").value;
   let image = document.querySelector("#image").value;

  title.textContent = nombre;
  image.textContent = mensaje;
   cerrarFormulario2();
});