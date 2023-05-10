import { openPopup, cardContainer } from "./index.js";
class Card {
  constructor(data, templateSelector) {
    this._name = data.name; // название карточки из массива
    this._link = data.link; // картинка карточки из массива
    this._templateSelecor = templateSelector; // сюда будет передаваться селектор темплейта, который и будут обрабатывать методы
    this._popupImage = document.querySelector(".popup__card-image");
    this._cardText = document.querySelector(".popup__card-text");
  }
  //Получаю теплейт карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelecor)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  // генерирую карточку
  generateCard() {
    this._cardElements = this._getTemplate();
    this._elementImage = this._cardElements.querySelector(".element__image");
    this._elementImage.src = this._link;
    this._cardElements.querySelector(".element__image").alt = this._name;
    this._cardElements.querySelector(".element__name-title").textContent =
      this._name;
    this._likeButton = this._cardElements.querySelector(".element__like");
    this._deleteButton = this._cardElements.querySelector(".delete-image");

    this._setEvtListener();

    return this._cardElements;
  }

  //лайк карточки
  _likeCard = () => {
    this._likeButton.classList.toggle("element__like_active");
  };

  // удаление карточки
  _deleteCard = () => {
    this._cardElements.remove(this._cardElements);
  };

  // попап карточки
  _openCardPopup = () => {
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._cardText.textContent = this._name;
    openPopup(cardContainer);
  };

  //слушатели событий
  _setEvtListener() {
    this._likeButton.addEventListener("click", this._likeCard); // лайк карточки
    this._deleteButton.addEventListener("click", this._deleteCard); // удаление карточки
    this._elementImage.addEventListener("click", this._openCardPopup); // открытие попапа карточки
  }
}

export default Card;
