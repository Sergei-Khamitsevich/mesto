// массив с данными карточек
const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//объект с данными для валидации
const validationConfig = {
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__item-error_visible",
};
//поиск формы редактирования
const popupEdit = document.querySelector(".popup_type_edit");
const popupFormEdit = popupEdit.querySelector(".popup__form");
//поиск формы создания карточки
const popupAddCard = document.querySelector(".popup_type_add");
const formCreatCard = popupAddCard.querySelector(".popup__form");

const profileEditButton = document.querySelector(".profile__edit-button");
//переменная кнопки попапа добавления карточки
const createCardButton = document.querySelector(".profile__add-card");

export {
  initialCards,
  validationConfig,
  popupFormEdit,
  formCreatCard,
  profileEditButton,
  createCardButton,
};
