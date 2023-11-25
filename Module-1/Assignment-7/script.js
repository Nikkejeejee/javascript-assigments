const diceRolls = parseInt(prompt('How many rolls?'));

let sum = 0;

for (let i = 0; i < diceRolls ; i++) {
  const result = Math.floor(Math.random() * 6) + 1;
  sum += result

}
const text = `The sum of dice rolls are ${sum} :D`;
document.getElementById('output').innerHTML = text;
