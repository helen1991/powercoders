//console.log('My code is JS line');

function setClass(className) {
  //console.log('setClass is running');
  let el = document.getElementById('mypara');
  el.className = className;
}

//console.log('This is after setClass is defined');

document.addEventListener('DOMContentLoaded', function(event){
  //console.log('DOMContentLoaded has fired');
  let makeWarning = document.getElementById('make-warning');
  makeWarning.addEventListener('click', function(event){
    //console.log('click listener fired');
    setClass('warning');
  });

  let makeTip = document.getElementById('make-tip');
  makeTip.addEventListener('click', function(event){
    setClass('tip');
  });

  let makeNormal = document.getElementById('make-normal');
  makeNormal.addEventListener('click', function(event){
    setClass('');
  });
});




