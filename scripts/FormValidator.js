class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._button = formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
  }
  //показываем ошибки
  _showInputError(inputElement, errorElement) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  //скрываем ошибки
  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  // проверяем форму на валидность и вызываем показ ошибки или скрытие ошибки
  _checkInputValidity(inputElement) {
    this._errorELement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, this._errorELement);
    } else {
      this._hideInputError(inputElement, this._errorELement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // устанавливаем кнопе disable
  _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.setAttribute("disabled", "true");
  }
  // снимаем disable
  _activeButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.removeAttribute("disabled");
  }
  // проверяем на валидность и устанавлием disable или снимаем
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._activeButton();
    }
  }

  // проходим по массиву полей и навешиваем функции в зависимости от ввода
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }

  resetError() {
    this._inputList.forEach((inputElement) => {
      this._errorELement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );
      if (!inputElement.validity.valid) {
        this._hideInputError(inputElement, this._errorELement);
      }
    });
    this._disableButton();
  }
}

export default FormValidator;
