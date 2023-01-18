// объявляем переменные
// переменные с попапом профиля
const popupEdit = document.querySelector('.popup_type_edit');
const profileTitle = profile.querySelector('.profile__titile');
const profileSubtitle = profile.querySelector('.profile__subtitle');

const editProfile = document.querySelector('.profile__edit-button');

const profileAddCard = document.querySelector('.profile__add-button');

const popupAddCard = document.querySelector('.popup_type_add');

const popupEditClose = popupEdit.querySelector('.popup__close');

const popupCardClose = popupAddCard.querySelector('.popup__close');

const popupForm = popupEdit.querySelector('.popup__form');

const popupName = popupForm.querySelector('.popup__item_type_name');

const popupDescription = popupForm.querySelector('.popup__item_type_description');

const profile = document.querySelector('.profile');







const openPopup = function(popup) {
  const open = popup.classList.add('popup_opened'); //открытие попапа
  popupName.value = profileTitle.textContent; // данные из заголовка
  popupDescription.value = profileSubtitle.textContent; // данные из описания
  return open;
}

const closePopup = function(close) {
  close.classList.remove('popup_opened'); // закрытие попапа
}

// функция ввода данных и закрытие на enter
const formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDescription.value;
  closePopup(popupEdit);
}

// навешиваю слушатели
editProfile.addEventListener('click', () => {
  openPopup(popupEdit);
});

profileAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
});

popupCardClose.addEventListener('click', () => {
  closePopup(popupAddCard);
});

popupForm.addEventListener('submit', formSubmitHandler);

// Создаём массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const elements = document.querySelector('.elements');
const card = document.querySelector('.card').content;
// Функция дбавления карточек(template)
  const addCard = (title, link) => {
  const element = card.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link; // из параметра функции
  element.querySelector('.element__name-title').textContent = title;// из параметра функции

  element.querySelector('.element__like').addEventListener('click', event => {
    event.target.classList.toggle('element__like_active');// лайк карточек
  });

  element.querySelector('.delete-image').addEventListener('click', () => {//удаление карточки
     element.remove()
});


  return element; //возвращаем карточку
 }



// Перебираю массив
const renderCard = () => {
  initialCards.forEach(item => {
  const cardTitle = item.name;
  const cardImage = item.link;
  elements.prepend(addCard(cardTitle, cardImage)); //вызываем функции добавления карточки с аргументами из массива и добавляем в начало секции
});}

renderCard()


