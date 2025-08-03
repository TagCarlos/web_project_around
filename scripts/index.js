import Card from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { closePopupEscape,} from "./utils.js";


closePopupEscape();

const validationConfiguration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button_save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const validationConfigurationCards = {
  formSelector: "#form-image",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};


const openButtonEditProfile = document.querySelector("#edit");
const popupForm = document.querySelector(".popup__form_Edit");
const closeButtonSave = popupForm.querySelector("#save");
const closeButtonX = popupForm.querySelector(".popup__button_close");

//abre formulario
function abrirFormulario() {
  popupForm.classList.add("popup_opened");
  popupForm.classList.add("modalOverlay");
  const modalOverlay = document.querySelector(".modalOverlay");

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      closeModal();
      popupForm.classList.remove("modalOverlay");
    }
  });
} 

//cierra formulario
function cerrarFormulario() {
   popupForm.classList.remove("popup_opened");
   popupForm.classList.remove("modalOverlay");
}

openButtonEditProfile.addEventListener("click", abrirFormulario);
closeButtonSave.addEventListener("click", cerrarFormulario); 
closeButtonX.addEventListener("click", cerrarFormulario);

closeButtonSave.addEventListener("submit", function (evt) { 
   evt.preventDefault();
   const name = document.querySelector("#name").value;
   const about = document.querySelector("#about").value;
   const title = document.querySelector(".header__name");
   const activity = document.querySelector(".header__activity");

  title.textContent = name;
  activity.textContent = about;
  cerrarFormulario();
});

//editar nombre y sobre mi
let formElement = document.querySelector("#form")

function handleProfileFormSubmit(evt) {

  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about");
  const nameDisplay = document.querySelector(".header__name");
  const jobDisplay = document.querySelector(".header__activity");

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

initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link, templateCard);
  //document.querySelector(".container").prepend(card.createCard());
  cardsList.prepend(card.createCard());
  card.setEventListener();

});

export function closeModal() {
      modalOverlay.classList.remove("popup_opened");
      popupImage.classList.remove("modalOverlay");
      popupImage.classList.remove("popup_opened");
      popupFormNewPlace.classList.remove("popup_opened");
      popupFormNewPlace.classList.remove("modalOverlay");
    };


let closeFormImage = document.querySelector(".popup__button_close_image"); //este se queda
const popupForm3 = document.querySelector("#popupImage");
function closeFormImages() {
  popupForm3.classList.remove("popup_opened");
}
closeFormImage.addEventListener("click", closeFormImages);


//crea formulario para añadir tarjeta "nuevo lugar"
const openButtonNewPlace = document.querySelector("#add-image");
const popupFormNewPlace = document.querySelector("#popup");
const closeButtonImage = popupFormNewPlace.querySelector("#save");
const closeButtonImageX = popupFormNewPlace.querySelector(".popup__button_close");

function openFormNewPlace() {
  popupFormNewPlace.classList.add("popup_opened");
  popupFormNewPlace.classList.add("modalOverlay");
  const modalOverlay = document.querySelector(".modalOverlay");

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
} 

openButtonNewPlace.addEventListener("click", openFormNewPlace);
closeButtonImageX.addEventListener("click", closeModal);
closeButtonImageX.addEventListener("click", closeModal);

closeButtonImage.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let title = document.querySelector("#title").value;
  let image = document.querySelector("#image").value;

  /* title.textContent = nombre;
  image.textContent = mensaje;
  closeFormNewPlace(); */
});

// crea tarjeta personalizada
const editImage = document.querySelector("#form-image"); //#form-image


function handleAddCard(submit) {

  submit.preventDefault();

  const title = document.querySelector("#title").value;
  const link = document.querySelector("#image").value;

  const card = new Card(title, link, templateCard);
  cardsList.prepend(card.createCard());
  //document.querySelector(".container").prepend(card.createCard());
  card.setEventListener();

}

//hace que agreguen cartas personalizadas desde el boton "nuevo lugar"
editImage.addEventListener('submit', handleAddCard);

//intancias para las clases

const formValidatorProfile = new FormValidator(validationConfiguration);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(validationConfigurationCards);
formValidatorCard.enableValidation();