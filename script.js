
'use strict';

let randomNumber = +prompt('Угадай число от 1 до 100');

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getNumber = function(randomNumberIndex) {
    if(randomNumberIndex > 25) {
        alert("Загаданное число меньше");  
        randomNumber = +prompt('Угадай число от 1 до 100');
        getNumber(randomNumber);
    }else if (randomNumberIndex < 25 && randomNumberIndex >= 1) {
        alert("Загаданное число больше");
        randomNumber = +prompt('Угадай число от 1 до 100');
        getNumber(randomNumber);
    }else if (!isNumber(randomNumberIndex)) {
        alert("Введи число");
        randomNumber = +prompt('Угадай число от 1 до 100');
        getNumber(randomNumber);
    }else if (randomNumberIndex == "" || randomNumberIndex == null) {
        alert("Игра окончена");
    }else if (randomNumberIndex == 25) {
        alert("Поздравляю, Вы угадали!!");
    }
}
getNumber(randomNumber);