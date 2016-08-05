function newList() {

  var container = document.getElementById('container')

  var toDoListModule = document.createElement('div');
  toDoListModule.setAttribute('id', 'toDoListModule');

  var inputWrapper = document.createElement('div');
  inputWrapper.setAttribute('id', 'inputWrapper');

  var title = document.createElement('div');
  title.setAttribute('id', 'title');
  title.textContent = 'Title';

  var listWrapper = document.createElement('div');
  listWrapper.setAttribute('id', 'listWrapper');

  var list = document.createElement('ul');
  list.setAttribute('id', 'list')

  var doneList = document.createElement('ul');
  doneList.setAttribute('id', 'doneList');

  var userInput = document.createElement('input');
  userInput.setAttribute('id', 'input');
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('onkeydown', "if (event.keyCode == 13)             document.getElementById('addBtn').click()");

  var addBtn = document.createElement('button');
  addBtn.setAttribute('id', 'addBtn');
  addBtn.innerHTML = '+';

  var doneSon = document.createElement('div');
  doneSon.setAttribute('id', 'done-son');
  doneSon.innerHTML = '<b>DONE</b>' + '&nbspSON!';


  container.appendChild(toDoListModule);
  toDoListModule.appendChild(doneSon);
  toDoListModule.appendChild(inputWrapper);
  toDoListModule.appendChild(listWrapper);
  inputWrapper.appendChild(title);
  inputWrapper.appendChild(userInput);
  inputWrapper.appendChild(addBtn);
  listWrapper.appendChild(list);
  listWrapper.appendChild(doneList);
}

function addToList() {
  if (input.value.length !== 0) {
    newLi = document.createElement('li')
    newLi.innerHTML = '<input type="checkbox" class="checkbox unchecked" data-color="#F57C00">' + '<span class = "toDoItem">' + input.value + '</span> <i class="material-icons delete-btn">close</i>';
    newLi.classList.add('item-in');
    list.appendChild(newLi);
    setTimeout(function () {
      newLi.classList.remove('item-in');
    }, 250);
    addCheckBoxListener();
    input.value = '';
    this.classList.add('pressed');
    setTimeout(function() {
      this.classList.remove('pressed');
    }.bind(this), 180);
  }
}

function isLastItem() {
  var hasChildren = list.hasChildNodes();
  var doneSon = document.getElementById('done-son');

  if (!hasChildren) {
    doneSon.classList.add('show-done-son');
    doneSon.style.display = 'flex';
    setTimeout(function () {
      doneSon.classList.remove('show-done-son');
      doneSon.style.display = 'none';
    }, 2000);

  }
}


function addCheckBoxListener() {
  var checkBox = document.querySelectorAll('input[type=checkbox]');
  var toDoItem = document.querySelectorAll('.toDoItem');
  var deleteBtn = document.querySelectorAll('.delete-btn');
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].classList.contains('unchecked')) {
      checkBox[i].addEventListener('change', completed);
      toDoItem[i].addEventListener('click', edit);
      deleteBtn[i].addEventListener('click', deleteItem);
      checkBox[i].style.color = listColorDarkValue;
    } else {
      checkBox[i].addEventListener('change', undo);
      deleteBtn[i].addEventListener('click', deleteItem);
    }
  }
}

function completed() {
  this.classList.remove('unchecked');
  this.classList.add('checked');

  var completedItem = this.parentNode;

  var clonedItem = this.parentNode.cloneNode(true);
  clonedItem.classList.add('muted');
  clonedItem.classList.add('item-in');

  setTimeout(function () {
    completedItem.classList.add('item-out')
    doneList.appendChild(clonedItem);
    divider();
    lockHeight();
  }, 150);

  setTimeout(function () {
    list.removeChild(completedItem);
    isLastItem();
  }, 350);

  setTimeout(function () {
    clonedItem.classList.remove('item-in');
    addCheckBoxListener();
    unlockHeight();
  }, 600);
}

function undo() {
  this.classList.remove('checked');
  this.classList.add('unchecked');

  var itemToDelete = this.parentNode;

  var clonedItem = this.parentNode.cloneNode(true);
  clonedItem.classList.remove('muted');
  clonedItem.classList.add('item-in');

  setTimeout(function () {
    lockHeight();
    itemToDelete.classList.add('item-out');
    list.appendChild(clonedItem);
  }, 150);

  setTimeout(function () {
    doneList.removeChild(itemToDelete);
    divider();
  }, 350);

  setTimeout(function () {
    clonedItem.classList.remove('item-in');
    unlockHeight();
    addCheckBoxListener();
  }, 600);

}

function divider() {
  var completedItems = document.getElementById("doneList").hasChildNodes();
  var newDivider = document.createElement('div');

  newDivider.id = "divider";
  newDivider.style.backgroundColor = window.getComputedStyle(toolbarWrapper).backgroundColor;

  console.log(completedItems);

  if (completedItems && !document.getElementById('divider')) {
    listWrapper.insertBefore(newDivider, doneList);
  } else if  (!completedItems) {
    var divider = document.getElementById('divider');
    listWrapper.removeChild(divider);
  }
}

function lockHeight() {
  var height = window.getComputedStyle(toDoListModule).height;
  toDoListModule.style.height = height;
}

function unlockHeight() {
  toDoListModule.style.height = '';
}

function edit() {

  var item = this;
  var itemValue = this.innerHTML;
  var newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('value', itemValue);
  newInput.setAttribute('class', 'editInput');

  this.parentNode.appendChild(newInput);
  newInput.focus();
  newInput.value = '';
  newInput.value = itemValue;
  this.style.display = 'none';

  newInput.onkeydown = function() {
    if (event.keyCode == 13) {
      itemValue = newInput.value;
      item.innerHTML = itemValue;
      this.parentNode.removeChild(newInput);
      item.style.display = 'inline-block';
    }
  }

  newInput.addEventListener('blur', function() {
    this.parentNode.removeChild(newInput);
    item.style.display = 'inline-block';
  });
}

function editTitle() {

  var item = this;
  var itemValue = this.innerHTML;
  var newInput = document.createElement('input');
  var mainInput = document.getElementById('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('value', itemValue);
  newInput.setAttribute('class', 'titleEditInput');

  this.parentNode.insertBefore(newInput, mainInput);
  newInput.focus();
  newInput.value = '';
  newInput.value = itemValue;
  this.style.display = 'none';

  newInput.onkeydown = function() {
    if (event.keyCode == 13) {
      itemValue = newInput.value;
      item.innerHTML = itemValue;
      item.style.opacity = '1';
      this.parentNode.removeChild(newInput);
      item.style.display = 'inline-block';
    }
  }

  newInput.addEventListener('blur', function() {
    this.parentNode.removeChild(newInput);
    item.style.display = 'inline-block';
  });
}

function deleteItem() {
  var li = this.parentNode;
  li.classList.add('item-out');
  setTimeout(function () {
    li.remove();
    divider();
  }, 250);

}

function modalDrop(e) {
  if (colorSchemeModal.classList.contains('color-switch-on')) {
    colorSchemeModal.classList.remove('color-switch-on');
    colorSchemeModal.classList.add('color-switch-off');
    setTimeout(function () {
      colorSchemeModal.classList.remove('color-switch-off');
    }, 800);
  } else {
    colorSchemeModal.classList.add('color-switch-on')
    scheme1.onclick = changeColorScheme;
    scheme2.onclick = changeColorScheme;
    scheme3.onclick = changeColorScheme;
    scheme4.onclick = changeColorScheme;;
  }
}


function changeColorScheme() {
  var toolbarColor = this.querySelector('.toolbar-color'),
    listColor = this.querySelector('.list-color'),
    accentColor = this.querySelector('.accent-color'),
    toolbarColorValue = toolbarColor.dataset.color,
    toolbarColorDarkValue = toolbarColor.dataset.colorDark,
    listColorValue = listColor.dataset.color,
    accentColorValue = accentColor.dataset.color,
    accentColorDarkValue = accentColor.dataset.colorDark;

    listColorDarkValue = listColor.dataset.colorDark;

  var toolbar = document.getElementById('toolbar'),
    list = document.getElementById('inputWrapper'),
    addBtn = document.getElementById('addBtn'),
    footer = document.getElementById('footer'),
    checkBox = document.getElementsByClassName('checkbox'),
    divider = document.getElementById('divider'),
    doneSon = document.getElementById('done-son');

  toolbar.style.backgroundColor = toolbarColorValue;
  list.style.backgroundColor = listColorValue;
  addBtn.style.backgroundColor = accentColorValue;
  footer.style.backgroundColor = toolbarColorDarkValue;
  toolbarWrapper.style.backgroundColor = accentColorDarkValue;
  doneSon.setAttribute('style', 'background-image: linear-gradient(' + toolbarColorValue +', '+ toolbarColorDarkValue+')');


  if (divider) {
    divider.style.backgroundColor = accentColorDarkValue;
  }
  for (var i = 0; i < checkBox.length; i++) {
    checkBox[i].style.color = listColorDarkValue;
  }
}

newList();

var list = document.getElementById('list'),
  input = document.getElementById('input'),
  addBtn = document.querySelector('#addBtn'),
  checkBox,
  newLi,
  title = document.getElementById('title'),
  scheme1 = document.getElementById('scheme1'),
  scheme2 = document.getElementById('scheme2'),
  scheme3 = document.getElementById('scheme3'),
  scheme4 = document.getElementById('scheme4'),
  toolbarWrapper = document.getElementById('toolbar-wrapper'),
  toDoListModule = document.getElementById('toDoListModule'),
  colorSchemeIcon = document.getElementById('color-scheme-icon'),
  colorSchemeModal = document.getElementById('color-scheme-modal');

var listColorDarkValue;

addBtn.onclick = addToList;
title.onclick = editTitle;
colorSchemeIcon.onclick = modalDrop;
