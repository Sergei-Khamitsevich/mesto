import { initialCards, validationConfig } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// переменные профиля
const profile = document.querySelector(".profile");
const profileTitle = profile.querySelector(".profile__titile");
const profileSubtitle = profile.querySelector(".profile__subtitle");

// переменные попапа профиля
const popupEdit = document.querySelector(".popup_type_edit");
const popupFormEdit = popupEdit.querySelector(".popup__form");
const popupEditClose = popupEdit.querySelector(".popup__close");
const popupName = popupFormEdit.querySelector(".popup__item_type_name");
const popupDescription = popupFormEdit.querySelector(
  ".popup__item_type_description"
);

// переменные с попапом добавления карточки
const popupAddCard = document.querySelector(".popup_type_add");
const formCreatCard = popupAddCard.querySelector(".popup__form");
const nameCard = formCreatCard.querySelector(".popup__item_type_title");
const linkCard = formCreatCard.querySelector(".popup__item_type_link");
const popupCardClose = popupAddCard.querySelector(".popup__close");

//Переменные с попапом картинки
const cardContainer = document.querySelector(".popup_type_card");
const popupCard = cardContainer.querySelector(".popup__card");
//const popupImage = popupCard.querySelector(".popup__card-image");
//const cardText = popupCard.querySelector(".popup__card-text");
const cardClose = popupCard.querySelector(".popup__close");

const elements = document.querySelector(".elements");

// переменные кнопок
const editProfile = document.querySelector(".profile__edit-button");
const profileAddCard = document.querySelector(".profile__add-card");

const openPopup = function (popup) {
  popup.classList.add("popup_opened"); //открытие попапа
  document.addEventListener("keydown", closeEscPopup); //вызываем закрытие попопа Esc
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened"); // закрытие попапа
  document.removeEventListener("keydown", closeEscPopup);
};

// функция ввода данных и закрытие на enter
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDescription.value;
  closePopup(popupEdit);
};

// навешиваю слушатели
editProfile.addEventListener("click", () => {
  //открытия попапа профиля
  popupFormEdit.reset();
  formValidEdit.resetError();
  popupName.value = profileTitle.textContent; // данные из заголовка
  popupDescription.value = profileSubtitle.textContent; // данные из описания
  openPopup(popupEdit);
});

popupEditClose.addEventListener("click", () => {
  //закрытия попапа профиля
  closePopup(popupEdit);
});

popupFormEdit.addEventListener("submit", handleProfileFormSubmit);

// перебираю  массив и добавляю карточки
const renderStartCards = () => {
  initialCards.forEach((item) => {
    const card = new Card(item, ".card");
    elements.prepend(card.generateCard());
  });
};

renderStartCards();

//добавление карточки из попапа
const createNewCard = (evt) => {
  evt.preventDefault();
  const dataCard = { name: nameCard.value, link: linkCard.value };
  const card = new Card(dataCard, ".card");
  elements.prepend(card.generateCard());
  closePopup(popupAddCard);
};

popupAddCard.addEventListener("submit", createNewCard);

profileAddCard.addEventListener("click", () => {
  //открытие попапа добавления карточки
  formCreatCard.reset(); // удаление введённых данных
  formValidCreatCard.resetError();
  openPopup(popupAddCard);
});

popupCardClose.addEventListener("click", () => {
  //закрытия попапа добавления карточки
  closePopup(popupAddCard);
});

cardClose.addEventListener("click", () => {
  // закрытие попапа карточки
  closePopup(cardContainer);
});

//закрытие попапа на Esc
function closeEscPopup(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//закрытие поапа при клике на overlay
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
});

const formValidCreatCard = new FormValidator(validationConfig, formCreatCard);
formValidCreatCard.enableValidation();

const formValidEdit = new FormValidator(validationConfig, popupFormEdit);
formValidEdit.enableValidation();

export { openPopup, cardContainer };
