// 1

const a = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= a.length; i++) {
    if (a[i] === 10) {
        console.log(a[i]);
        break
    } else {
        console.log(a[i]);
    }
}


// 2
const b = [1, 5, 4, 10, 0, 3];
console.log(b.indexOf(4));


// 3
const c = [1, 3, 5, 10, 20];
d = c.join([" "]);
console.log(d);

// 4
const d = [];

for (let i = 0; i < 3; i++) {
    const innerD = [];
    for (let index = 0; index < 3; index++) {
        innerD.push(1);
    }
    d.push(innerD);
}
console.log(d);


// 5 
let e = [1, 1, 1]
e.push(2, 2, 2);
console.log(e);

// 6
const f = [9, 8, 7, 'a', 6, 5];
f.sort();
console.log(f);
f.pop();
console.log(f);

// 7
let number = Number(prompt("Enter a number from 1 to 10"));
const g = [9, 8, 7, 6, 5];
for (let i = 0; i < g.length; i++) {
    if (number == g[i]) {
    console.log(true);
    break
    } else {
        console.log(false);
    }
}

// 8 
let h = "abcdef";
let newH = h.split("").reverse().join("")
console.log(newH);

// 9 
const i = [
    [1, 2, 3,],
    [4, 5, 6],
]

const newI = i.flat();
console.log(newI);

// 10

const array = [1, 4, 6, 3, 9, 2];

for (let i = 0; i < array.length - 1; i++) {
    let k = array[i] + array[i + 1];
    console.log(k);
}

// 11 
const j = [4, 5, 12]

const k = j.map(function(i, index, array) {
    return (i**2);
} );
console.log(k);

// 12

// const cities = ["Tokio", "Moscow", "London"]
// let wordLength = cities.map(function (a, b, c) {
//     return a.split("");

// })
// console.log(wordLength);


// const result = [];
// const words = [];
// function getNumberString () {
//     for (let i = 0; i < cities.length; i++) {
//         words = cities[i].split("1");
//         for (let j = 0; j < words.length; j++) {
//             result.push() = words[j].length;
            
//         }
//     }

// }
// console.log(words);
// console.log(result);


// 13 
let numbers = [1, -3, 5, -12, -34, 7]
let belowZero = numbers.map(function(a) {
    if (a < 0) {
        return a;
    }
    
});
console.log(belowZero);