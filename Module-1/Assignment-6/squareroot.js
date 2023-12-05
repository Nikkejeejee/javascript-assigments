const question = confirm('Should I calculate the square root?');

  function calcSqr() {
    let calNum;

    if (question) {
      const num = parseInt(prompt('Enter a number:'));
      if (!isNaN(num) && num >= 0) {
        calNum = Math.sqrt(num);
        document.write(`The square root of ${num} is ${calNum}`);
      } else if (isNaN(num)) {
        document.write('Invalid input. Please enter a valid number.');
      } else {
        document.write('The square root of a negative number is not defined');
      }
    } else {
      document.write('The square root is not calculated');
    }

    document.getElementById('output').innerHTML = calNum;
  }

  calcSqr();