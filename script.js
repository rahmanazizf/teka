'use strict';

const trueValue = Math.trunc(Math.random() * 20);
let initialScoreElement = document.querySelector('.score');
initialScoreElement.textContent = 20;
// let initialScore = Number(initialScoreElement.textContent);

let bestScoreElement = document.querySelector('.hscore');
let bestScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const userGuess = Number(document.querySelector('.guess').value);
    if (isNaN(userGuess)) {
        document.querySelector('.message').textContent = "⛔ Kamu belum memasukkan angka...";
    } else if (userGuess === trueValue) {
        document.querySelector('.message').textContent = "🥳 Benar!!!";
        document.querySelector('body').style.backgroundColor = '#10e5ec';
        if (bestScore < initialScore) bestScore = initialScore;
    } else if (Number(initialScoreElement.textContent) > 1 && userGuess !== trueValue) {
        if (userGuess > trueValue) {
            document.querySelector('.message').textContent = "😒 Terlalu besar... coba lagi";
            initialScoreElement.textContent = Number(initialScoreElement.textContent) - 1;
        } else if (userGuess < trueValue) {
            document.querySelector('.message').textContent = "😒 Terlalu kecil... coba lagi";
            initialScoreElement.textContent = Number(initialScoreElement.textContent) - 1;
        }
    } else {
        document.querySelector('.message').textContent = "😭 Kamu gagal... mulai lagi";
        if (bestScore < Number(initialScoreElement.textContent)) bestScore = initialScore;
    }
});
