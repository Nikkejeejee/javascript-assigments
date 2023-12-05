let dog = [];

for (let i = 0; i < 6; i++) {
    dog[i] = prompt(`Names of dog ${i + 1} pls:`);
}

dog.sort();

let dogList = '';
for (let i = dog.length - 1; i >= 0; i--) {
    dogList += `<li>${dog[i]}</li>`;
}

document.getElementById('output').innerHTML = `<ul>${dogList}</ul>`;
