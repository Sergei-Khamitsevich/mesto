class UserInfo {
  constructor({ selectorName, selectorDescription }) {
    this._selecorName = document.querySelector(selectorName); //селектор заголовка профиля
    this._selectorDescription = document.querySelector(selectorDescription); // селектор описания профиля
  }
  // получаю заголовок и описание профиля и присваиваю их ключам name и description
  getUserInfo() {
    return {
      name: this._selecorName.textContent,
      desription: this._selectorDescription.textContent,
    };
  }

  //присваиваю значения полей в заголовок имени и в описание профиля
  setUserInfo(data) {
    {
      this._selecorName.textContent = data.name;
      this._selectorDescription.textContent = data.desription;
    }
  }
}

export default UserInfo;
