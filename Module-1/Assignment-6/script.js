const question = confirm('Should I calculate the square root?');

function calcSqr() {
  let calNum;

  if (question) {
    const num = parseInt(prompt('Enter a number:'));
    if (num >= 0) {
      calNum = Math.sqrt(num);
      document.write(`The square root of ${num} is ${calNum}`);
    } else {
      document.write('Cannot calculate a negative number');
    }
  } else {
    document.write('The square root is not calculated');
  }

  document.getElementById('output').innerHTML = calNum;
}

calcSqr();
