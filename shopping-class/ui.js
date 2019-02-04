/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 *
 * @returns {HTMLElement} li element
 */
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













