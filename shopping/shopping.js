/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */

function createNewListItem(itemName) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteIcon = document.createElement('i');
  const clearListButton = document.querySelector('button#clear');
  const listItemCheck = document.querySelectorAll('li');

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
  listItem.appendChild(deleteIcon);
  return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearListButton = document.querySelector('button#clear');


  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      return;
    }
    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
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

    shoppingList.appendChild(createNewListItem(trimmedValue));
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
});












