let arrNum = [];
/*Tekee tyhjän listan*/

for (let i = 0; i < 5; i++) { /*Toistaa alla olevaa toimintaa 5 kertaa*/
  let askNum = prompt(`Give me a random number (${i + 1})`); /*tekee stringin, jossa selain promptaa kysymyksen*/
  arrNum.push(askNum); /* tallentaa .push metodilla annetut luvut listaan*/
}

let reverse = '';
/*Luo tyhjän merkkijonon*/

for (let i = arrNum.length - 1; i >= 0; i--) { /*kääntää arrNum tallennetut arvot toisinpäin*/
  reverse += arrNum[i] + ' '; /*lisää käännetyt arvot reserve-merkkijonoon*/
}

document.getElementById('output').innerHTML = reverse;
/*liittää reverse-merkkijonon HTML:ään*/