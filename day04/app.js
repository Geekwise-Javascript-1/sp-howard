// var answer = prompt("Type something.")
//
// if (typeof answer === 'string') {
//     alert("its a string");
// } else {
//   alert(answer);
//   console.log(answer);
// }

// var num1 = parseInt(prompt("Type a number"));
// while (isNaN(num1)){
//   num1 = parseInt(prompt("Type a number"));
// };
//
// var num2 = parseInt(prompt("Type a second number"));
// while (isNaN(num2)){
//   num2 = parseInt(prompt("Type a number"));
// };
//
// alert(num1 * num2);
// alert(num1 / num2);

// var string = "one, two, three, four, five";
//
// console.log(string.length);
// console.log(string.slice(17,21));

// var randNum = Math.random();
// var multi = randNum * 11;
// var round = Math
//
// var theDate = new Date();
// var daysof
// console.log(theDate.getDay());

var name = prompt("What's your name?");

function caps(name) {
  var first = name[0].toUpperCase();
  var rest = name.slice(1, name.length);
  console.log(first+rest);
}

caps(name);
