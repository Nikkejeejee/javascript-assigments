let startYear = parseInt(prompt('Tell me a starting year:'));
let endYear = parseInt(prompt('Tell me an ending year:'));

let yearList = [];

function isLeapYear(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      yearList.push(`<li>${year}</li>`);
    }
  }
}

isLeapYear(startYear, endYear);
document.getElementById('output').innerHTML = `<ul>${yearList}</ul>`;
