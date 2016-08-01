function foo() {
  var a = "Inside function foo";
  return name;
}
//
// console.log(foo());

var name = "Steven";
function capitalize() {
  return name[0].toUpperCase() + name.slice(1);
}

var capitalizedName = capitalize();
// console.log(capitalizedName);

var capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(capitalize('howard'));

// logName("Steven");
//
// function logName(name) {
//   console.log(name);
// }

// Calling the function before it is defined wors because of "hoisting"

// logAgain('Steven');
//
// var logAgain = function(name) {
//   console.log(name);
// }

// defining a function like (setting variable to an anonymous function) this does not full hoist the function, so this does not work in Javascript

// var name = "Steve"
//
// function alertName() {
//   alert(name);
//   var name = "Eve";
//   alert(name);
// }
//
// alertName();

//----------------------

var h1 = document.getElementById('h1');
var hasClass = h1.hasAttribute('class');

h1.setAttribute('rel','whatever');

// console.log(h1);

h1.removeAttribute('rel');

// console.log(h1);


var anchors = document.querySelectorAll('ul li a');
// console.log(anchors.item(1));

for (var i = 0; i < anchors.length; i++) {
  var anchor = anchors[i];
  console.log(anchor);
}
