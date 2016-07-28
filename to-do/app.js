// var userInput = document.getElementById('userInput'),
    // list =  document.getElementById('list'),
    // submitBtn = document.getElementById('submitBtn');
    // items = [];



// function addToList() {
//   items.push(userInput.value);
//   writeToDoc(items);
// }
//
// function writeToDoc(listItems) {
//   var newLi = list.appendChild(document.createElement('li'));
//   for (var i = 0; i < listItems.length; i++) {
//     newLi.innerHTML = listItems[i];
//   }
// }

var toDoList =  {
  items : new Array,
  list : document.getElementById('list'),
  userInput : document.getElementById('userInput'),
  submitBtn : document.getElementById('submitBtn'),
  addToList : function() {
    this.items.push(this.userInput.value);
    this.writeToDoc(this.items);
  },
  writeToDoc : function(listItems) {
    var newLi = this.list.appendChild(document.createElement('li'));
    for (var i = 0; i < listItems.length; i++) {
      newLi.innerHTML = listItems[i];
    }
  }
};

toDoList.submitBtn.onclick = toDoList.addToList;
