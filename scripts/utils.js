export const initialCards = [
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
export const popup = document.querySelector(".popup");
export const popupForm = document.querySelector(".popup__profile_edit");
export const userName = document.querySelector(".header__name");
export const userJob = document.querySelector(".header__activity");
const popupLeyend = document.querySelector(".popup__title_image");
export const modalOverlay = popupForm.querySelector(".modalOverlay");
export const openButtonEditProfile = document.querySelector("#edit");
export const closeButtonSave = popupForm.querySelector("#save");
export const closeButtonX = popupForm.querySelector(".popup__button_close");
export let formElement = document.querySelector("#form");

export const saveChangeEdit = () =>{
  UserInfo.setUserInfo({
    name: inputName.value,
    job: inputJob.value
  });
  cerrarFormulario() 
};
export function cerrarFormulario() {
   popupForm.classList.remove("popup_opened");
   popupForm.classList.remove("modalOverlay");
}

export {popupLeyend}