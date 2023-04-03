// 1
let password = "qwerty123";
let userPassword = prompt ("Enter pasword");
if (password === userPassword) {
    console.log ("Correct password")
} else {
    console.log ("Incorrect pasword")
};

// 2 
let с = prompt ("Enter a number")
if (с > 0 && с < 10) {
    console.log ("Correct")
}  else  if (с == 0 || с == 10) {
    console.log ("Equal")
} else {
    console.log ("Incorrect")
}

// 3
let d = 10;
let e = 102;
if (d > 100 || e > 100) {
    console.log ("Correct")
} else {
    console.log ("Incorrect")
}

// 4
let a = Number('2');
let b = Number('3');
alert(a + b);

// 5

let monthNumber =  Number(prompt("Enter month`s number"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log ("Winter")
        break;
    case 3:
    case 4:
    case 5:
        console.log ("Spring")
        break;
    case 6:
    case 7:
    case 8:
        console.log ("Summer")
        break;
    case 9:
    case 10:
    case 11:
        console.log ("Autumn")
        break;
    default:
        console.log ("You have entered incorrect number")
        break;
}

// Extra 7 

let item = prompt ("Enter a number");

console.log (item);

item = Number(item);

console.log (item);

if ((item % 2) == 0) {
    alert("Even");
} else if ((item % 2) == 1){
    alert("Odd");
} else {
    alert("Incorrect input")
}



// 8 - 9

let clientOS = prompt("Enter 0 for iOS, 1 for Android");
let clientDeviceYear = prompt ("What year did you buy your device?");

if (clientOS == 0 && clientDeviceYear < 2015) {

    console.log("Light version for iOS") 

    } else if (clientOS == 1 && clientDeviceYear < 2015) {

        console.log("Light version for Android") 

        } else if (clientOS == 0) {

            console.log("Download for iOS")

            } else if (clientOS == 1) {

            console.log ("Download for Android")

                } else {

                console.log ("Try again")
                }
