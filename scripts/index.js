let editProfile = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupClose = popup.querySelector('.popup__close');

let popupVisability = function() {
  popup.classList.toggle('popup_opened');
}

editProfile.addEventListener('click', popupVisability);
popupClose.addEventListener('click', popupVisability);

let popupForm = popup.querySelector('.popup__form');
let popupName = popupForm.querySelector('.popup__item_type_name');
let popupDescription = popupForm.querySelector('.popup__item_type_description');
let profile = document.querySelector('.profile');
let profileTitle = profile.querySelector('.profile__titile');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupDescription.value;
  popupVisability();
}

popupForm.addEventListener('submit', formSubmitHandler);
