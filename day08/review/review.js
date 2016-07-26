function num2arr(num1, num2) {
    var arr = [];
    arr.push(num1 + num2);
    arr.push(num1 * num2);
    return arr;
}
// console.log(num2arr(3, 6));

function numCompare(num1, num2) {
    if (num1 > num2) {
        return 'Larger';
    } else if (num1 === num2) {
        return 'Equal';
    } else {
        return 'Smaller';
    }
}
// console.log(numCompare(6, 6));

function isUpperCase() {
    var string = prompt("Enter a letter, uppercase or lower")
    if (string.toUpperCase() === string) {
        return true;
    } else {
        return false;
    }
}
// console.log(isUpperCase());

function splitStr() {
    var string = prompt("Enter a string to array-ify");
    arr = [];
    for (var i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }
    return arr;
}
// console.log(splitStr());

function fizzBuz() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuz();
