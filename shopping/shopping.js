document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function(event){
        console.log('The button was clicked');

     //with variable.
     let inputBox = document.getElementById('item');
     console.log(inputBox.value);
    });
});

