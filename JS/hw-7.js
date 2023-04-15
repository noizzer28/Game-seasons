// 1
let js = "js"
let upperJS = js.toUpperCase();
console.log(upperJS);

// 2 
const array = ['Кошка', 'Кит', 'Комар', 'Носорог']
let b = "Ко"
let newArr = array.filter(function(a) {
       return a.toLowerCase().startsWith(b.toLowerCase())
},b);
console.log(newArr);

// 3
let num = 32.58884;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

// 4
const numbers = [52, 53, 49, 77, 21, 32]
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// 5
function getRandomNum (min, max) {
    return Math.floor((Math.random()* max) + min);
}
console.log(getRandomNum(1, 10));

// 6 
let box = 6;
const arrayNew = [];
for (let i = 0; i < box / 2; i++) {
    arrayNew.push(Math.floor((Math.random()* box)));
} 
console.log(arrayNew);

// 7

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(3, 127));


// 8
console.log(new Date);  

// 9
let currentDate = new Date; 
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// 10
const weekDays = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date;
let fullDate = {
    Дата: [myDate.getDate()] + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + weekDays[myDate.getDay()],
    Время: [myDate.getHours()] + ":" + [myDate.getMinutes()] + ":" + [myDate.getSeconds()],
}
console.log(fullDate);


// 11
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function playWords() {
    let mixedFruits = fruits.sort(() => Math.random() - 0.5);
    message = mixedFruits.join(', ');
    alert('Ознакомьтесь со списком: ' + message);
    let firstEl = String(prompt('Чему равнялся первый элемент массива?'));
    let lastEl = String(prompt('Чему равнялся последний элемент массива?'));

    if ((mixedFruits[0].toLowerCase() === firstEl.toLowerCase()) && (mixedFruits[6].toLowerCase() === lastEl.toLowerCase())) {
        alert('Поздравляю, вы угадали!');
    } else if ((mixedFruits[0].toLowerCase()) === (firstEl.toLowerCase()) || (mixedFruits[6].toLowerCase()) === (lastEl.toLowerCase())){
        alert("Вы были близки к победе");
    } else {
        alert('Вы ответили неверно');
    }

}
