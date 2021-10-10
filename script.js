'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function getNumber() {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
      }
      let x =  randomInteger(1, 100);
      console.log(x);
    function getRandomNumber () {
        let randomNumber = prompt('Угадай число от 1 до 100');
        if (randomNumber === "" || randomNumber === null) {
            alert("Игра окончена");
        }else if (!isNumber(randomNumber)) {
            alert("Введи число");
            getRandomNumber();
        }else if (x === +randomNumber) {
            alert("Поздравляю, Вы угадали!!");
        }else if (randomNumber > x) {
            alert("Загаданное число меньше");
            getRandomNumber();
        }else if (randomNumber < x && randomNumber) {
            alert("Загаданное число больше");
            getRandomNumber();
        }
    }
    getRandomNumber();
}
getNumber();
