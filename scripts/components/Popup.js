class Popup {
  constructor({ popupSelector }) {
    this._selector = document.querySelector(popupSelector);
  }

  //открытие попапа
  open() {
    this._selector.classList.add("popup_opened"); //добавляем класс открытия попапа
    document.addEventListener("keydown", this._handleEscClose); //слушатель закрытия попапа по Esc
  }

  //закрытие попапа
  close() {
    this._selector.classList.remove("popup_opened"); //удаялем класс открытия
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
    const closeButton = this._selector.querySelector(".popup__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
    this._selector.addEventListener("click", this._handleCloseOverlay);
  }
}

export default Popup;
