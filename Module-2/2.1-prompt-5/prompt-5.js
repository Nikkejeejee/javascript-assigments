const num1 = prompt('Enter any number:');
const num2 = prompt('Enter 2nd number:');
const num3 = prompt('Enter 3rd number:');
const num4 = prompt('Enter 4th number:');
const num5 = prompt('Enter 5th number:');

 let arr = [num1, num2, num3, num4, num5];
    let output = '';

    for (let i = arr.length - 1; i >= 0; i--) {
      output += arr[i] + ' ';
    }

    document.getElementById('output').innerHTML = output;


/*
let arr = [num1, num2, num3, num4, num5];
let nums = arr;
for (let nums in arr) {
  document.getElementById('output').innerHTML = nums
}
*/