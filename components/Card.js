export default class Card {
    constructor(title, link, selector, handleCardOpen) {
        this._title = title;
        this._imageLink = link;
        this._selector = selector;
        this.templateCard = document.querySelector(".template__card");
        this.cardsList = document.querySelector(".container");
        this.handleCardOpen = handleCardOpen;
    }

    createCard() {
        this.clonedCard = this.templateCard.content.querySelector(".container__cards").cloneNode(true);
        this.cardTitle = this.clonedCard.querySelector(".container__title");
        this.cardImage = this.clonedCard.querySelector(".container__image");
        this.cardLikeButton = this.clonedCard.querySelector(".container__heart");
        this.deleteButton = this.clonedCard.querySelector(".container__trash");

        this.cardTitle.textContent = this._title;
        this.cardImage.src = this._imageLink;


        return this.clonedCard;
    }

    setEventListener() {
        this.cardImage.addEventListener("click", () => {
            this.handleCardOpen(this._title, this._imageLink);
        });

        this.cardLikeButton.addEventListener("click", () => {
            this.cardLikeButton.classList.toggle("container__heart_active");
        });

        this.deleteButton.addEventListener("click", () => {
            this.clonedCard.remove();
        });

    };
    closeModal() {
        this.modalOverlay.classList.remove("popup_opened");
        this.popupImage.classList.remove("modalOverlay");
    };
    closeFormImages() {
        this.closeFormImage = document.querySelector(".popup__button_close_image");
        this.popupForm3 = document.querySelector("#popupImage");

        this.popupForm3.classList.remove("popup_opened");
    };
    handleCardClick(){
        createCard();
    }
}