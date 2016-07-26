// function isEmpty() {
//   var test = prompt('What would you like to do?');
//   if(test.trim().length === 0) {
//     alert('You need to type something. Try again');
//     isEmpty();
//   } else {
//       alert(test);
//   }
// }
//
// isEmpty();

// var fruits = ['apple','banana','nectarine','cherry','orange'];
//
// var getFruit = fruits.splice(1, 3, 'grapes', 'pineapple', 'durian');
//
// console.log(getFruit);
// console.log(fruits);

// var lastFruit = fruits.pop();

// var fruitColors = [];
// var cherry = ['cherry', 'red'];
// var banana = ['banana','yellow'];
// var apple = ['apple','green'];
//
// fruitColors.push(cherry);
// fruitColors.push(banana);
// fruitColors.push(apple);
//
// console.log(fruitColors[0][1]);
// console.log(fruitColors[1][1]);
// console.log(fruitColors[2][1]);



// ONE
function square() {
  var num = prompt('What number would you like to square?');
  if (isNaN(num)) {
    return NaN;
  } else {
    return num*num;
  }
}
// console.log(square());


// TWO
function grammar(string) {
  if (typeof string !== 'string') {
    return "";
  } else if (string[string.length - 1] !== ".") {
    string += ".";
  }
  string = (string[0].toUpperCase()) + string.slice(1);
  return string;
};

// console.log(grammar('3232'));

//THREE
function flip(string) {
  if ((typeof string !== 'string') || (string.length < 2) || (string.length % 2 !== 0)){
    return "";
  } else {
    var firstHalf = string.substring(0,(string.length/2));
    var secondHalf = string.substring(string.length/2);
    var flipped = secondHalf + firstHalf;
    return flipped;
  }
}

//FOUR
function averageOfFour(array){
  if(typeof array != 'object') {
    return NaN;
  } else {
    var sum = array[0] + array[1] + array[2] +array[3];
    console.log(sum);
    return sum/4;
  }
}

// var array = [1,2,3,4];
// console.log(averageOfFour(array));
