import Popup from "./popup.js";

class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupImage = this._popupElement.querySelector(".popup__card-image");
    this._cardText = this._popupElement.querySelector(".popup__card-text");
  }

  open = (data) => {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.title;
    this._cardText.textContent = data.title;
    super.open();
  };
}

export default PopupWithImage;
