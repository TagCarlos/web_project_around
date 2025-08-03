 import {closeModal} from "./index.js"
export function closePopupEscape() {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeModal();
    }
  });
}
