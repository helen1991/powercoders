/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */

function createNewListItem(itemName, quantity) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteIcon = document.createElement('i');

  const textSpan = document.createTextNode(itemName);
  span.appendChild(textSpan);

  listItem.appendChild(deleteIcon).className = 'far fa-trash-alt';

  //Add a click handler that logs the click here
  deleteIcon.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('Delete button is clicked: ' + itemName);
    listItem.remove();

    document.querySelector('button#clear').disabled = document.querySelectorAll('li').length === 0;
  });

  listItem.appendChild(span);
  if (quantity !== '') {
    listItem.appendChild(document.createTextNode(' '));
    const quantityBox = document.createElement('span');
    quantityBox.innerText = `(${quantity})`;
    listItem.appendChild(quantityBox);
  }


  listItem.appendChild(deleteIcon);
  return listItem;
}

function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearListButton = document.querySelector('button#clear');


  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    const quantityBox = document.getElementById('qty').value.trim();
    if (trimmedValue === '') {
      return;
    }

    const quantity = document.getElementById('qty');
    shoppingList.appendChild(createNewListItem(trimmedValue, quantityBox));
    inputBox.value = '';
    quantity.value = '';

    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if(trimmedValue === ''){
      return;
    }

    if (event.key !== 'Enter'){
      return;
    }

    const quantity = document.getElementById('qty');
    shoppingList.appendChild(createNewListItem(trimmedValue, quantity.value.trim()));

    quantity.value = '';
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });

  clearListButton.addEventListener('click', function (event) {
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
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}












