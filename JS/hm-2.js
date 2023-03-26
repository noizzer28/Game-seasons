let a = 10;
alert (a);
a = 20;
alert (a);

let firstIphone = 2007;
alert (firstIphone);

let theCreator = "Brandon Eigh";
alert (theCreator);

let b = 2;
alert (`${a + b}, ${a - b}, ${a * b}, ${a / b}`);

let result = b ** 5;
alert (result)

a = 9;
alert (a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++
num--
alert(num);
// console.log (num);

let age = prompt("Сколько вам лет?" );
alert (age);

let user = {
    name: "John",
    age: 32,
    isAdmin: true,
}

user["city of residence"] = "Batumi";

alert (user['city of residence']);

user.age = 20;

delete user["city of residence"];


user.info = prompt("Что хотите узнать о пользователе?");

alert (user.info);

user.name = prompt ("Ваше имя");
alert (`Hello, ${user.name}!`);

