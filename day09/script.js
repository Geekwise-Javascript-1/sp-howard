var myCar = {
make: 'Nissan',
model : 'Fronier',
year : 2006,
color : 'silver'
};

var me = {
  name : 'Steven',
  sayName : function() {
    alert(this.name);
  }
}

// me.sayName();

var fruits = ['apples', 'grapes', 'bananas', 'strawberries', 'cantelope'];

function displayFruit() {
  console.log(fruits);
}

function addFruit(fruit) {
  fruits.push(fruit);
  displayFruit();
}

function changeFruit(position, value) {
  fruits[position] = value;
  displayFruit();
}

function deleteFruit(position) {
  fruits.splice(position, 1);
  displayFruit();
}

// PUTTING FUNCTIONS IN THE OBJECT

var fruitList = {
  fruits : ['apples', 'grapes', 'bananas'],
  displayFruit : function() {
    console.log(this.fruits);
  },
  addFruit : function(fruit) {
    this.fruits.push(fruit);
    this.displayFruit();
  },
  changeFruit : function(position, value) {
    this.fruits[position] = value;
    this.displayFruit();
  },
  deleteFruit : function(position) {
    this.fruits.splice(position, 1);
    this.displayFruit();
  }
};

fruitList.addFruit('papaya');
fruitList.changeFruit(3, 'orange');
fruitList.deleteFruit(0);
