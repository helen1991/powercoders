/**
 * Represent an item in the shopping list.
 */
class ShoppingListItem {
  /**
   *@param {string}  name
   * @param {string} quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
  toListItem() {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    const textSpan = document.createTextNode(this.name);

    span.appendChild(textSpan);
    listItem.appendChild(span);

    if (this.quantity !== '') {
      listItem.appendChild(document.createTextNode(' '));
      const quantityBox = document.createElement('span');
      quantityBox.innerText = `(${this.quantity})`;
      listItem.appendChild(quantityBox);
    }
    deleteButton.className = 'far fa-trash-alt';
//Add a click handler that logs the click here
    deleteButton.addEventListener('click', function () {
      document.getElementById('item').focus();
      listItem.remove();
      document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;
    });

    listItem.appendChild(deleteButton);
    return listItem;
  };

}