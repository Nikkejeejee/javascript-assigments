const amount = Number(prompt('Number of participants? '));
let participants = [];

for (let i = 0; i < amount; i++) {
  participants[i] = prompt(`Names of the participants: ${i + 1}:`);
}

participants.sort();

let list = '';
for (const name of participants) {
  list += `<li>${name}</li>`;
}


document.getElementById('output').innerHTML = `<ol>${list}</ol>`;
