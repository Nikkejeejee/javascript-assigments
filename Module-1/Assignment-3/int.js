function calculateOperations() {
  let num1 = prompt('Enter the first integer:');
  let num2 = prompt('Enter the second integer:');
  let num3 = prompt('Enter the third integer:');

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);

  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let average = sum / 3;

  document.write('<p>Sum: ' + sum + '</p>');
  document.write('<p>Product: ' + product + '</p>');
  document.write('<p>Average: ' + average + '</p>');
}

calculateOperations();