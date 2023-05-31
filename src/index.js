import "./pages/index.css";
import {
  initialCards,
  validationConfig,
  popupFormEdit,
  formCreatCard,
  profileEditButton,
  createCardButton,
} from "./utils/constants.js";

import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";

const formValidCreatCard = new FormValidator(validationConfig, formCreatCard);
formValidCreatCard.enableValidation();

const formValidEdit = new FormValidator(validationConfig, popupFormEdit);
formValidEdit.enableValidation();

const userInfo = new UserInfo({
  selectorName: ".profile__titile", //заголовок профиля
  selectorDescription: ".profile__subtitle", // описание профиля
});

// создаю новый класс для карточки и передаю селектор попапа
const popupImage = new PopupWithImage({
  popupSelector: ".popup_type_card",
});
popupImage.setEventListeners(); // вызываю метод со слушателями из родительского класса Popup

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".card", popupImage.open);
      cardList.addItem(card.generateCard()); //генерирую карточку и добавляю её в контейнер
    },
  },
  ".elements" // контейнер для карточки
);
cardList.renderItems(); // вызываю публичный метод перебора массива

// форма профиля
const popuProfileForm = new PopupWithForm({
  // передаю селектор попапа профиля
  popupSelector: ".popup_type_edit",
  handleFormSubmit: (dataForm) => {
    //передаю функцию, которая вызывается в PopupWithForm
    //и параметру dataForm прилетает объект с полями попапа профиля
    userInfo.setUserInfo(dataForm); //вызываю метод присвоения заголовка и описания профиля и передаю
    //объект с полями попапа профиля
    popuProfileForm.close();
  },
});
popuProfileForm.setEventListeners();

//форма создания карточки
const popupWithForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  handleFormSubmit: (dataForm) => {
    const cardByForm = new Card(dataForm, ".card", popupImage.open);
    cardList.addItem(cardByForm.generateCard());

    popupWithForm.close();
  },
});
popupWithForm.setEventListeners();

//открытие попапа профиля по клику
profileEditButton.addEventListener("click", () => {
  popuProfileForm.open();
  formValidEdit.resetError();
});
//открытие попапа карточки по клику
createCardButton.addEventListener("click", () => {
  popupWithForm.open();
  formValidCreatCard.resetError();
});
