function createNewListItem(itemName) {
  let listItem = document.createElement('li');
  let span = document.createElement('span');
  let button = document.createElement('button');

  let textSpan = document.createTextNode(itemName);
  let deleteButton = document.createTextNode('delete');


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
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    if (inputBox.value.trim()!== '') {
      shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if(inputBox.value.trim() !== ''){
    if (event.key === 'Enter'){
        shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';

      }
    }
  });

  inputBox.focus();
});












