import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { popupForm, userName, userJob, initialCards, openButtonEditProfile, closeButtonSave, closeButtonX, formElement } from "../components/utils.js";

const openPopup = new Popup(".popup");
openPopup.setEventListeners();

const popupProfile = new PopupWithForm("#edit-popup", (data) => {
  console.log(data);
  userProfile.setUserInfo(data.name, data.job)
});
popupProfile.setEventListeners();
const popupCards = new PopupWithForm("#new-card-popup", (data) => {
  createCard({
    name: data.title,
    link: data.url
  })
});
popupCards.setEventListeners();


const popupWithImage = new PopupWithImage("#popupImage");
popupWithImage.setEventListeners();

const userProfile = new UserInfo({
  name: userName,
  job: userJob
});

// Crear popup de imagen
const imagePopup = new PopupWithImage("#popupImage");
imagePopup.setEventListeners();

// Función para manejar clic en tarjeta
const handleCardClick = (link, leyend) => {

  imagePopup.open(leyend, link);
};

// Crear sección de tarjetas
const cardSection = new Section({
  items: initialCards,
  renderer: createCard,
}, ".container");

// Función para crear tarjetas
function createCard(cardData) {
  const card = new Card(cardData.name, cardData.link, '#card-template', handleCardClick);
  const cardElement = card.createCard();
  cardSection.addItem(cardElement);
  card.setEventListener();
};

cardSection.renderElement();

//abre formulario
function abrirFormulario() {
  popupProfile.open();
}

//cierra formulario
export function cerrarFormulario() {
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
/* let formElement = document.querySelector("#form"); */

function handleProfileFormSubmit(evt) {

  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about");
  const nameDisplay = document.querySelector(".header__name");
  const jobDisplay = document.querySelector(".header__activity");

  nameDisplay.textContent = nameInput.value;
  jobDisplay.textContent = jobInput.value;
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);

// crea tarjetas
const templateCard = document.querySelector(".template__card")
const cardsList = document.querySelector(".container");

export function closeModal() {
  popupImage.classList.remove("modalOverlay");
  popupImage.classList.remove("popup_opened");
  popupFormNewPlace.classList.remove("popup_opened");
  popupFormNewPlace.classList.remove("modalOverlay");
};


let closeFormImage = document.querySelector(".popup__button_close_image");
const popupOpenImage = document.querySelector("#popupImage");
function closeFormImages() {
  popupOpenImage.classList.remove("popup_opened");
}
closeFormImage.addEventListener("click", closeFormImages);


//crea formulario para añadir tarjeta "nuevo lugar"
const openButtonNewPlace = document.querySelector("#add-image");
const popupFormNewPlace = document.querySelector("#new-card-popup");
const closeButtonImage = popupFormNewPlace.querySelector("#saveImage");
const closeButtonImageX = popupFormNewPlace.querySelector(".popup__button_close");

function openFormNewPlace() {
  popupCards.open();
}

openButtonNewPlace.addEventListener("click", openFormNewPlace);
closeButtonImageX.addEventListener("click", closeModal);
closeButtonImageX.addEventListener("click", closeModal);

//intancias para las clases
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

const formValidatorProfile = new FormValidator(validationConfiguration);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(validationConfigurationCards);
formValidatorCard.enableValidation();