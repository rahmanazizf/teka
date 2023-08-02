'use strict';

let trueValue = Math.trunc(Math.random() * 20);
let initialScoreElement = document.querySelector('.score');
initialScoreElement.textContent = 20;

let bestScoreElement = document.querySelector('.hscore');
// bestScoreElement.textContent = 0;
bestScoreElement.textContent = loadData();
console.log("data sebelumnya", loadData())

let messageElement = document.querySelector('.message');
let body = document.querySelector('body');
body.style.backgroundColor = '#222';
let userGuess;

function saveData(bestScore) {
    const toSend = {"best_score": bestScore}
    fetch("http://127.0.0.1:8789/save_data/", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(toSend),})
    .then((response) => response.json())
    .then((data) => {
    // Proses respons dari FastAPI (jika diperlukan)
    console.log(data);
    })
    .catch((error) => {
    console.error("Error:", error);
  });
}

function loadData() {
// Membuat HTTP GET request menggunakan Fetch API
fetch("http://127.0.0.1:8789/api/data")
  .then((response) => response.json()) // Mengonversi respons JSON menjadi objek JavaScript
  .then((data) => {
    // Memproses data yang diterima dari FastAPI
    console.log(data); // Menampilkan data ke konsol
    // ... Lakukan sesuatu dengan data, misalnya tampilkan di halaman HTML Anda
    // bestScoreElement.textContent = data["best_score"]
    return data.best_score
  })
  .catch((error) => {
    console.error("Error:", error); // Menangani kesalahan jika ada
  });
}

const mainGame = function() {
    userGuess = Number(document.querySelector('.guess').value);
    if (isNaN(userGuess)) {
        messageElement.textContent = "⛔ Kamu belum memasukkan angka...";
    } else if (userGuess === trueValue) {
        messageElement.textContent = "🥳 Benar!!!";
        body.style.backgroundColor = '#10e5ec';
        body.style.color = '#222'
        document.querySelector('.number').textContent = trueValue;
        if (Number(bestScoreElement.textContent) < Number(initialScoreElement.textContent)) {
            bestScoreElement.textContent = initialScoreElement.textContent;
            saveData(bestScoreElement.textContent);
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
}

document.querySelector('.check').addEventListener('click', mainGame);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        mainGame()
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
        saveData(bestScoreElement.textContent) 
    }
);
