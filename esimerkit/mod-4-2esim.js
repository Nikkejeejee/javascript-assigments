async function doMultiply() {
  try {
    const response = await fetch('http://localhost:3000/multiply/4' + num);
    const json = await response.json();
    console.log(json.msg, json.result);
  } catch (error) {
    console.error('doMultiply fetch fail', error);
  }p
}
const number = prompt("Anna numero:")
doMultiply(num: 9);

const outputElem = document.querySelector(#toka)