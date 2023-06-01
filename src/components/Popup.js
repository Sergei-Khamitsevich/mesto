class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  //открытие попапа
  open() {
    this._popupElement.classList.add("popup_opened"); //добавляем класс открытия попапа
    document.addEventListener("keydown", this._handleEscClose); //слушатель закрытия попапа по Esc
  }

  //закрытие попапа
  close() {
    this._popupElement.classList.remove("popup_opened"); //удаялем класс открытия
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //закрытие на Esc
  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  _handleCloseOverlay = (event) => {
    if (event.target.classList.contains("popup")) {
      this.close();
    }
  };

  // слушатели событий
  setEventListeners() {
    const closeButton = this._popupElement.querySelector(".popup__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("click", this._handleCloseOverlay);
  }
}

export default Popup;
