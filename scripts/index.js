// переменные профиля
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__titile');
const profileSubtitle = profile.querySelector('.profile__subtitle');

// переменны попапа профиля
const popupEdit = document.querySelector('.popup_type_edit');
const popupForm = popupEdit.querySelector('.popup__form');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupName = popupForm.querySelector('.popup__item_type_name');
const popupDescription = popupForm.querySelector('.popup__item_type_description');

// переменные кнопок
const editProfile = document.querySelector('.profile__edit-button');
const profileAddCard = document.querySelector('.profile__add-card');

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
editProfile.addEventListener('click', () => { //открытия попапа профиля
  openPopup(popupEdit);
});

popupEditClose.addEventListener('click', () => { //закрытия попапа профиля
  closePopup(popupEdit);
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

// переменные с попапом добавления карточки
const popupAddCard = document.querySelector('.popup_type_add');
const formCreatCard = popupAddCard.querySelector('.popup__form');
const nameCard = formCreatCard.querySelector('.popup__item_type_title');
const linkCard = formCreatCard.querySelector('.popup__item_type_link');
const popupCardClose = popupAddCard.querySelector('.popup__close');

//Переменные с попапом картинки
const cardContainer = document.querySelector('.popup_type_сard');
const popupCard = cardContainer.querySelector('.popup__card');
const popupImage = popupCard.querySelector('.popup__card-image');
const cardText = popupCard.querySelector('.popup__card-text');
const cardClose =  popupCard.querySelector('.popup__close');

//переменные template
const elements = document.querySelector('.elements');
const card = document.querySelector('.card').content;
const element = card.querySelector('.element');

// Функция дбавления карточек(template)
  const addCard = (title, link) => {
  const elementCard = element.cloneNode(true);
  const image = elementCard.querySelector('.element__image');//картинка
  image.src = link; // из параметра функции
  const tittleCard =  elementCard.querySelector('.element__name-title') //название карточки
  tittleCard.textContent = title;// из параметра функции
  elementCard.querySelector('.element__like').addEventListener('click', event => {
    event.target.classList.toggle('element__like_active');// лайк карточек
  });

  elementCard.querySelector('.delete-image').addEventListener('click', () => {//удаление карточки
    elementCard.remove()
  });

  image.addEventListener('click', () => { //открытие попапа карточки
    popupImage.src = image.src = link
    cardText.textContent = tittleCard.textContent = title
    openPopup(cardContainer)
  })

  return elementCard; //возвращаем карточку
 }

// Перебираю массив
const renderCard = () => {
  initialCards.forEach(item => {
  const cardTitle = item.name;
  const cardImage = item.link;
  elements.prepend(addCard(cardTitle, cardImage)); //вызываем функции добавления карточки с аргументами из массива и добавляем в начало секции
});}

renderCard()
//добавление карточки из попапа
const creatCard = evt => {
  evt.preventDefault();
  const titleCard = nameCard.value;
  const imageCard = linkCard.value;
  elements.prepend(addCard(titleCard, imageCard));
  closePopup(popupAddCard);
}

popupAddCard.addEventListener('submit', creatCard);

profileAddCard.addEventListener('click', () => { //открытия попапа добавления карточки
  openPopup(popupAddCard);
});

popupCardClose.addEventListener('click', () => { //закрытия попапа добавления карточки
  closePopup(popupAddCard);
});

cardClose.addEventListener('click', () => { // закрытие попапа карточки
  closePopup(cardContainer)
})
