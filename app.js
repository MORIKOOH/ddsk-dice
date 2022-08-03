'use strict';

let startTime;
let endTime;
let totalTime;

window.addEventListener('DOMContentLoaded', () => {
  startTime = new Date();
});

const output = document.getElementById('output');

const base = ['ドド', 'スコ'];
const answer = 'ラブ注入♡';

const ddsk = 'ドドスコスコスコ';
let result = '';
let temp = []
let tempThree = ['','',''];

const scrollOutput = () => {
  output.scroll(0, output.scrollHeight);
}

const ddskDice = () => {
  for (let i = 0; i <= 3; i++){
    let randomNumber = Math.round(Math.random());
    temp.push(base[randomNumber]);
  }

  result = temp.join('');
  tempThree.shift();
  tempThree.push(result);
  output.insertAdjacentHTML('beforeend', `<p class="centering">${result}</p>`);
  scrollOutput();

  if (tempThree[0] === ddsk && tempThree[1] === ddsk && tempThree[2] === ddsk) {
    output.insertAdjacentHTML('beforeend', `<p class="centering love">${answer}</p>`);
    scrollOutput();
    clearInterval(ddskTimer);

    endTime = new Date();
    totalTime = (endTime - startTime) / 1000;
    output.insertAdjacentHTML('beforeend', `<p class="centering love">${totalTime} s.</p>`);
    scrollOutput();
    temp = [];
  } else {
    temp = [];
  }
}

const ddskTimer = setInterval(ddskDice, 10);
