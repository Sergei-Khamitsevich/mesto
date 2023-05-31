class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  }
  //перебираю карточки и вызываю на каждой функцую renderer
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
  //метод добавления карточки в контейнер
  addItem(element) {
    this._selector.prepend(element);
  }
}

export default Section;
