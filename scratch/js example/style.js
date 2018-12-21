console.log = ('This is example of JS');

function addNewPara(text){
    let elP = document.createElement('p');
    let pContent = document.createTextNode(text);
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);

}

document.addEventListener('DOMContentLoaded', function(event) {
    let nextOne = document.getElementById('click-me');
    nextOne.addEventListener('click', function (event) {
       // addNewPara('Second paragraph');
        newList();
    });
});

function newList() {
    let elul = document.createElement('ul');
    let liA = document.createElement('li');
    let liAContent = document.createTextNode("Item one");
    liA.appendChild(liAContent);
    elul.appendChild(liA);

    let liB = document.createElement('li');
    let liBContent = document.createTextNode('Item two ');
    liB.appendChild(liBContent);
    elul.appendChild(liB);


    let em = document.createElement('em');
    let emContent = document.createTextNode('emphasised');
    em.appendChild(emContent);
    liB.appendChild(liBContent);
    liB.appendChild(em);

    let liC = document.createElement('li');
    let liCContent = document.createTextNode('Item Three');
    liC.appendChild(liCContent);
    elul.appendChild(liC);


    let elBody = document.getElementById('body');
    elBody.appendChild(elul);
}
