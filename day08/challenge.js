function e(elementType, text, attributes, styles) {
  var e = document.createElement(elementType);
  e.textContent = text;
  for (var i = 0; i < attributes.length; i++) {
    e.setAttribute(attributes[i][0],attributes[i][1]);
  }
  for (var i = 0; i < styles.length; i++) {
    e.setAttribute('style', styles[i][0] + ':' + styles[i][1] + ';');
  }
  return e;
}

var a = e("a", "Whatevs brah", [['href', "http://www.google.com"]], [['color', "blue"]]);

document.body.appendChild(a);
