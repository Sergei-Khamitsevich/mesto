import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formSelector = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formSelector.querySelectorAll(".popup__item");
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
       input.value = data[input.name]
    })
  }

  // генерация объекта с ключами полей попапа
  getInputValues() {
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  // отмена стандартного события и вызов функции с аргументом объекта ключей попапа
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
    });
  }

  close() {
    super.close();
    this._formSelector.reset();
  }
}

export default PopupWithForm;
