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
    console.log('Delete button is clicked: ' + itemName);
    listItem.remove();
  });

  listItem.appendChild(span);
  listItem.appendChild(button);
  return listItem;
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    createNewListItem(inputBox.value);
    let li = createNewListItem(inputBox.value);
    let ul = document.querySelector('ul');
    ul.appendChild(li);
    inputBox.value = '';

    //call createNewListItem with the contents of the input widget and save
    //the result in variable

  });
    // Add code here that listen for 'keyup' on the 'input' element
   //and logs the event.key property
  document.querySelector('input').addEventListener('keyup',function (event){
    if (event.key === 'Enter') {
      console.log(event.key);
      let inputBox = document.getElementById('item');
      let li = createNewListItem(inputBox.value);
      document.querySelector('ul').appendChild(li);
      inputBox.value = '';
    }
  });
});













