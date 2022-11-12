// объявляем переменные
const editProfile = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');

const popupForm = popup.querySelector('.popup__form');
const popupName = popupForm.querySelector('.popup__item_type_name');
const popupDescription = popupForm.querySelector('.popup__item_type_description');
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__titile');
const profileSubtitle = profile.querySelector('.profile__subtitle');

const openPopup = function() {
  popup.classList.add('popup_opened'); //открытие попапа
  popupName.value = profileTitle.textContent; // данные из заголовка
  popupDescription.value = profileSubtitle.textContent; // данные из описания
}

const closePopup = function() {
  popup.classList.remove('popup_opened'); // закрытие попапа
}

// функция ввода данных и закрытие на enter
const formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDescription.value;
  closePopup();
}
// навешиваю слушатели
editProfile.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler);
