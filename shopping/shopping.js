/**
 * Represent an item in the shopping list.
 *
 * @param {string} name - Name of the item
 * @param {string} quantity - Quantity of the item
 * @constructor - Returns the object with name and quantity properties
 */
function ShoppingListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
}

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 *
 * @returns {HTMLElement} li element
 */
ShoppingListItem.prototype.toListItem = function() {
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

function domContentLoaded() {
  const quantityBox = document.getElementById('qty');
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearListButton = document.querySelector('button#clear');

  function onKeyup(event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if(trimmedValue === ''){
      return;
    }

    if (event.key !== 'Enter'){
      return;
    }

    const quantity = document.getElementById('qty');
    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
    quantity.value = '';
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    quantityBox.focus();
  }

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === '') {
      return;
    }

    const quantity = document.getElementById('qty');
    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    quantity.value = '';

    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', onKeyup);
  quantityBox.addEventListener('keyup', onKeyup);

  clearListButton.addEventListener('click', function () {
    const items = document.querySelectorAll('li');
    items.forEach(function (el) {
      console.log('All the items are Clear');
      el.remove();
    });

    clearListButton.disabled = true;
    inputBox.focus();
  });

  inputBox.focus();
  addItemButton.disabled = true;
  clearListButton.disabled = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}













