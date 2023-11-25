const year = prompt('Enter a year:');

function leapYear() {
  let result = '';

  if (year % 4 === 0 && year % 100 !== 0) {
    result = 'Year ' + year + ' is a leap year :)';
  } else if (year % 100 === 0 && year % 400 === 0) {
    result = 'Year ' + year + ' is a leap year.';
  } else {
    result = 'Year ' + year + ' is not a leap year :(';
  }

  document.getElementById('output').innerHTML = result;
}

leapYear();
