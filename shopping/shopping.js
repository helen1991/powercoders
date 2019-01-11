function createNewListItem(itemName) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  const textSpan = document.createTextNode(itemName);
  const deleteButton = document.createTextNode('delete');


  span.appendChild(textSpan);
  button.appendChild(deleteButton);

  //Add a click handler that logs the click here
  button.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('Delete button is clicked: ' + itemName);
    listItem.remove();
  });

  listItem.appendChild(span);
  listItem.appendChild(button);
  return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim()!== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if(inputBox.value.trim() !== ''){
      addItemButton.disabled = false;
    if (event.key === 'Enter'){
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }

    if (inputBox.value.trim() === ''){
      addItemButton.disabled = true;
    }
  });

  inputBox.focus();
  addItemButton.disabled = true;
});












