'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getNumber = function(x) {
    function getRandomNumber () {
        let randomNumber = +prompt('Угадай число от 1 до 100');
        if(randomNumber > x) {
            alert("Загаданное число меньше");
            getRandomNumber();
        }else if (randomNumber < x && randomNumber >= 1) {
            alert("Загаданное число больше");
            getRandomNumber();
        }else if (!isNumber(randomNumber)) {
            alert("Введи число");
            getRandomNumber();
        }else if (randomNumber == "" || randomNumber == null) {
            alert("Игра окончена");
        }else if (randomNumber == 25) {
            alert("Поздравляю, Вы угадали!!");
        }
    }
    getRandomNumber();
}
getNumber(25);