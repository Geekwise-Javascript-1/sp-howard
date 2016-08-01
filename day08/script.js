
var a = document.createElement('a');
a.textContent = "I'm a LINK";
// a.setAttribute('href','http://www.google.com');
a.href = "http://www.yahoo.com";

var h1 = document.createElement('h1');

document.body.appendChild(h1);

h1.appendChild(a);

setTimeout(function() {
  h1.removeChild(a);
}, 2000)

// a.setAttribute('style', 'background-color: red; color: white;');
a.style.backgroundColor = "green";
a.style.color= "gold";
