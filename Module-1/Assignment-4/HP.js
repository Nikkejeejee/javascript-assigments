
function assignHouse(studentName) {
  let randomValue = Math.floor(Math.random() * 4) + 1;

  let house;
  switch (randomValue) {
    case 1:
      house = 'Gryffindor';
      break;
    case 2:
      house = 'Slytherin';
      break;
    case 3:
      house = 'Hufflepuff';
      break;
    case 4:
      house = 'Ravenclaw';
      break;
    default:
      house = 'Unknown';
      break;
  }

  document.getElementById('output').innerHTML = '<p>' + studentName + ', you are a ' + house + '.</p>';
}

let studentName = prompt('Enter your name:');
assignHouse(studentName);