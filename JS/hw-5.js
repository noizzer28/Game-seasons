// // Not a homework

// const user = {
//     name: "Loli",
//     age: 13,
//     city: "Tokio",
//     getInfo () {
//         return (`User name is ${user.name}, age is ${user.age}, lives in ${user.city}`);
//     },
// };

// console.log(user.getInfo());

// //

// const square1 = {
//     width: 23,
//     height: 13,
//     area: getRectangleArea,
//     perimeter: getRectandlePerimeter,
// }

// const square2 = {
//     width: 13,
//     height: 5,
//     area: getRectangleArea,
//     perimeter: getRectandlePerimeter,
// }

// function getRectandlePerimeter()  {
//     return this.width * 2 + this.height * 2;
// }
// function getRectangleArea() {
//     return this.width * this.height;
// }
// console.log(square1.perimeter());
// console.log(square1.area());
// console.log(square2.perimeter());
// console.log(square2.area());


// homework 1

function getNum (a , b) {
    if (a < b) {
        return a;
    } else {
        return b;
    } 
}

console.log(getNum(465 , 465));

// 2

function even(a) {
 
    if (a % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
    
}
even(4);


// 3.1 

function getSquare (a) {
    console.log(a ** 2);
}
getSquare(3);

// 3.2 
function getSquare2 (a) {
    return a ** 2;
}
console.log(getSquare2(4));

// 4

function userHello () {
    let userAge = Number(prompt("Сколько вам лет?"))
    if (userAge >= 0 & userAge <= 12) {
        alert("Привет, друг!");
    } else if (userAge >= 13) {
        alert("Добро пожаловать!");
    } else {
        alert("Вы ввели неправильное значение")
    }
}

userHello();

// 5

function checkNum(a , b) {
    if (isNaN(a) || isNaN(b) ) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(a * b);
    }
}

checkNum("ghbd" , 4);

// 6 

function askExponent () {
    let result = Number(prompt("Enter a number"))

    if (isNaN(result)) {
        alert("Переданный параметр не является числом");
    } else {
        alert(`${result} в кубе равняется ${result ** 3}`);
    }
}

askExponent();

// 7 
const circle1 = {
    radius: 45,
    area: getArea,
    perimeter: getPerimeter 
}

const circle2 = {
    radius: 15,
    area: getArea,
    perimeter: getPerimeter 
}

function getPerimeter () {
    return (this.radius * 2 * 3.14);
}

function getArea () {
    return ((this.radius ** 2) * 3.14);
}
console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());

function playSeasons() {
    let monthNumber =  Number(prompt("Введи номер месяца от 1 до 12"));
   if (monthNumber === 12 || monthNumber <= 2) {
    console.log("Зима")
   } else if (monthNumber >= 3 & monthNumber <= 5) {
    console.log("Весна") 
   } else if (monthNumber >= 6 & monthNumber <= 8) {
    console.log("Лето")
   } else if (monthNumber >= 9 & monthNumber <= 11) {
    console.log("Осень")
   } else {
    alert("Вы ввели неверное значение")
   }
}
