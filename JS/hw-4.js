
// while (true) {
//     const msg = prompt ("enter smth");
//     if (msg == "continue") {
//         continue;
//     }  
//     console.log (msg);
//     if (msg == "break") {
//         break;
//     }
// }


// 1
let a = 0;
while (a < 2) {
    console.log ("Привет");
    a++;
}

// 2
for (let b = 1; b <= 5; b++) {
    console.log(b);
}

// 3
for (let b = 7; b <= 22; b++) {
    console.log(b);
}

// 4 
const obj = {
    Коля: 200,
    Петя: 300,
    Вася: 400,
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
    // if (key !== obj.Коля) {
    //     break;
    // }
    
}
// пыталась остановить цикл на Коле, оно работает, но неправильно, тк с петей и васей  в консоль тоже выводится только коля.

// 5
let n = 1000;
let num = 0
while (n > 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num)

// 6

let friday = 2;
for (let day = 1; day <= 31; day++) {
    if ((day - friday) % 7 == 0) {
        console.log(`Сегодня пятница, ${day}e число, подготовь отчет`);
    }
    
}