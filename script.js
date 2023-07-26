'use strict';

let trueValue = Math.trunc(Math.random() * 20);
let initialScoreElement = document.querySelector('.score');
initialScoreElement.textContent = 20;

let bestScoreElement = document.querySelector('.hscore');
bestScoreElement.textContent = 0;

let messageElement = document.querySelector('.message');
let body = document.querySelector('body');
body.style.backgroundColor = '#222';

document.querySelector('.check').addEventListener('click', function() {
    const userGuess = Number(document.querySelector('.guess').value);
    if (isNaN(userGuess)) {
        messageElement.textContent = "⛔ Kamu belum memasukkan angka...";
    } else if (userGuess === trueValue) {
        messageElement.textContent = "🥳 Benar!!!";
        body.style.backgroundColor = '#10e5ec';
        body.style.color = '#222'
        document.querySelector('.number').textContent = trueValue;
        if (Number(bestScoreElement.textContent) < Number(initialScoreElement.textContent)) {
            bestScoreElement.textContent = initialScoreElement.textContent;
        }
    } else if (Number(initialScoreElement.textContent) > 1 && userGuess !== trueValue) {
        if (userGuess > trueValue) {
            messageElement.textContent = "😒 Terlalu besar... coba lagi";
            initialScoreElement.textContent = Number(initialScoreElement.textContent) - 1;
        } else if (userGuess < trueValue) {
            messageElement.textContent = "😒 Terlalu kecil... coba lagi";
            initialScoreElement.textContent = Number(initialScoreElement.textContent) - 1;
        }
    } else {
        messageElement.textContent = "😭 Kamu gagal... mulai lagi";
        if (Number(bestScoreElement.textContent) < Number(initialScoreElement.textContent)) {
            bestScoreElement.textContent = initialScoreElement.textContent;
        }
    }
});

document.querySelector('.reset').addEventListener(
    'click', function() {
        messageElement.textContent = "Mulai menebak...";
        initialScoreElement.textContent = 20;
        body.style.backgroundColor = '#222';
        body.style.color = '#eee';      
        trueValue = Math.trunc(Math.random() * 20);
        document.querySelector('.number').textContent = '?';  
    }
);
