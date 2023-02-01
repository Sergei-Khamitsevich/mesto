// переменные профиля
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__titile');
const profileSubtitle = profile.querySelector('.profile__subtitle');

// переменные попапа профиля
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupName = popupFormEdit.querySelector('.popup__item_type_name');
const popupDescription = popupFormEdit.querySelector('.popup__item_type_description');
console.log(popupName, popupDescription)
// переменные кнопок
const editProfile = document.querySelector('.profile__edit-button');
const profileAddCard = document.querySelector('.profile__add-card');

const openPopup = function(popup) {
  popup.classList.add('popup_opened'); //открытие попапа
}

const closePopup = function(popup) {
  popup.classList.remove('popup_opened'); // закрытие попапа
}

// функция ввода данных и закрытие на enter
const ProfileSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDescription.value;
  closePopup(popupEdit);
}

// навешиваю слушатели
editProfile.addEventListener('click', () => { //открытия попапа профиля
  popupName.value = profileTitle.textContent; // данные из заголовка
  popupDescription.value = profileSubtitle.textContent; // данные из описания
  openPopup(popupEdit);
});

popupEditClose.addEventListener('click', () => { //закрытия попапа профиля
  closePopup(popupEdit);
});

popupFormEdit.addEventListener('submit', ProfileSubmitHandler);

// переменные с попапом добавления карточки
const popupAddCard = document.querySelector('.popup_type_add');
const formCreatCard = popupAddCard.querySelector('.popup__form');
const nameCard = formCreatCard.querySelector('.popup__item_type_title');
const linkCard = formCreatCard.querySelector('.popup__item_type_link');
const popupCardClose = popupAddCard.querySelector('.popup__close');

//Переменные с попапом картинки
const cardContainer = document.querySelector('.popup_type_card');
const popupCard = cardContainer.querySelector('.popup__card');
const popupImage = popupCard.querySelector('.popup__card-image');
const cardText = popupCard.querySelector('.popup__card-text');
const cardClose =  popupCard.querySelector('.popup__close');

//переменные template
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card').content.querySelector('.element');

// Функция дбавления карточек(template)
  const creatCard = (title, link) => {
    const elementCard = cardTemplate.cloneNode(true);
    const image = elementCard.querySelector('.element__image');//картинка
    image.src = link; // из параметра функции
    const tittleCard =  elementCard.querySelector('.element__name-title') //название карточки
    tittleCard.textContent = title;// из параметра функции
    image.alt = title;// alt картинки
    elementCard.querySelector('.element__like').addEventListener('click', event => {
    event.target.classList.toggle('element__like_active');// лайк карточек
  });

  elementCard.querySelector('.delete-image').addEventListener('click', () => {//удаление карточки
    elementCard.remove()
  });

  image.addEventListener('click', () => { //открытие попапа карточки
    popupImage.src = link
    popupImage.alt = title
    cardText.textContent = tittleCard.textContent = title
    openPopup(cardContainer)
  })

  return elementCard; //возвращаем карточку
 }

// Перебираю массив
const renderStartCards = () => {
  initialCards.forEach(item => {
  const cardTitle = item.name;
  const cardImage = item.link;
  elements.prepend(creatCard(cardTitle, cardImage)); //вызываем функции добавления карточки с аргументами из массива и добавляем в начало секции
});}

renderStartCards()
//добавление карточки из попапа
const createNewCard = evt => {
  evt.preventDefault();
  const titleCard = nameCard.value;
  const imageCard = linkCard.value;
  elements.prepend(creatCard(titleCard, imageCard));
  closePopup(popupAddCard);
}

popupAddCard.addEventListener('submit', createNewCard);

profileAddCard.addEventListener('click', () => { //открытия попапа добавления карточки
  openPopup(popupAddCard);
});

popupCardClose.addEventListener('click', () => { //закрытия попапа добавления карточки
  closePopup(popupAddCard);
});

cardClose.addEventListener('click', () => { // закрытие попапа карточки
  closePopup(cardContainer)
})
