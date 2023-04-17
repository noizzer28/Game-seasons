// 1

let sum = "sum";
let mult = "mult";
function getResult (array, action) {
    if (action === "sum") {
        return array.reduce (function (a, b) {
            return a + b;
        }, 0);
    } else if (action === "mult") {
        return array.reduce (function(a, b) {
            return a * b;
        }, 1)
    } else {
        return 'Incorrect input'; 
    }

}
console.log(getResult([3, 9, 14], sum));

// 2
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

const compare = (a, b) => {
    return a.age - b.age;
}

console.log(users.sort(compare));   

// 3
function each (array, callback) {
    return callback(array);
}

function reverse (array) {
    return array.reverse();
}

function transformToNumber (array) {
    const newArray = array.filter (
        i => !isNaN(Number(i))
    )
    return newArray.map (
        i => (Number(i))
    )   
}
console.log(transformToNumber([4, "h", 3, "42"]));


// 4


function showDate () {
    const interval = setInterval(() => {
        console.log(new Date);
    }, 3000);
    setTimeout (() => {
        clearInterval(interval);
        console.log("Время истекло!")
    }, 30000);
}
showDate();


// 5
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
        talk();
    }, 1000);
}

function talk() {
    console.log('Разговор');    
}

calling();
beeps();

