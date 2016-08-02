var btn = document.querySelectorAll('button');
var a = document.querySelector('a');


for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', changeColor);
  // btn[i].addEventListener('mouseover', function() {
  //   this.style.color = 'magenta';
  //   this.style.backgroundColor = 'blue';
  // });
  // btn[i].addEventListener('mouseout', function() {
  //   this.style.color = '';
  //   this.style.backgroundColor = '';
  // });
}

function changeColor() {
  document.body.style.backgroundColor = this.id;
}

function removeColor() {
  var randNum = Math.floor(Math.random() * 3);
  console.log(randNum);
  btn[randNum].removeEventListener('click', changeColor);
}

a.addEventListener('click', removeColor);
