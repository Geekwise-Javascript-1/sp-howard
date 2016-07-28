
var tech = ['HTML', 'CSS', 'Javascript', 'PHP', 'WordPress'];

console.log(tech);

var btn = document.querySelector('button');

//onclick uses = , not (). It's not a function.
btn.onclick = alertArr;

function alertArr() {
  alert(tech);
}
