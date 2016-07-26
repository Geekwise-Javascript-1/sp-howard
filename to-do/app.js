var userInput = document.getElementById('userInput'),
    list = document.getElementById('list'),
    submitBtn = document.getElementById('submitBtn'),
    items = [];

submitBtn.onclick = addToList;

function addToList() {
  items.push(userInput.value);
  writeToDoc(items);
}

function writeToDoc(listItems) {
  var newLi = list.appendChild(document.createElement('li'));
  for (var i = 0; i < listItems.length; i++) {
    newLi.innerHTML = listItems[i];
  }
}
