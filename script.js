'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function getNumber() {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.round(rand);
      }
      let hiddenNumber =  randomInteger(1, 100);
      console.log(hiddenNumber);
      let attempts = 9;
      
    function getRandomNumber () {
        let randomNumber = prompt('Угадай число от 1 до 100');
        if (randomNumber === "" || randomNumber === null) {
            alert("Игра окончена");
        }else if (!isNumber(randomNumber)) {
            alert("Введи число");
            getRandomNumber();
        }else if (hiddenNumber === +randomNumber) {
            let a = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if(a === true) {
                getNumber();
            }
        }else if (randomNumber > hiddenNumber && attempts >= 1) {
            alert("Загаданное число меньше, осталось попыток " + attempts);
            --attempts;
            getRandomNumber();
        }else if (randomNumber < hiddenNumber && attempts >= 1) {
            alert("Загаданное число больше, осталось попыток " + attempts);
            --attempts;
            getRandomNumber();
        }else if (attempts = 1) {
            let b = confirm("Попытки закончились, хотите сыграть еще?");
            if(b === true) {
                getNumber(); 
            } 
        }
    }
    getRandomNumber();
}
getNumber();
