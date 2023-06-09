console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


let favoriteNumber = 2;

let answer = window.prompt("What number am i thinking of?");

if (answer != favoriteNumber) {
    if (answer < favoriteNumber)
        console.log("too low");

    if (answer > favoriteNumber)
        console.log("too high");
}
else {
    console.log("Congrats!")
}


let birthMonth = window.prompt("What is your birth month?");

switch (birthMonth) {
    case 'January':
    case 'December':
    case 'November':
    case 'February':
        console.log("You were born in Winter!");
        break;
    case 'March':
    case 'April':
    case 'May':
        console.log("You were born in Spring!");
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log("You were born in Summer!");
        break;
    case 'September':
    case 'October':
        console.log("You were born in Fall!");
        break;
    Default:
        console.log("Were you born?");
}



let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";


switch (typeId) {
    case "01":
        type = "Tank top";
    case "02":
        type = "T-Shirt";
    case "03":
        type = "Long sleeve";
    case "04":
        type = "Sweat Shirt";
     Default:
        type = "other";
}


switch (colorId) {
    case "BK":
        color = "Black";
    case "BL":
        color = "Blue";
    case "RD":
        color = "Red";
    case "PU":
        color = "Purple";
        Default:
        color = "White";
}

switch (sizeId) {
    case "S":
        size = "Small";
    case "M":
        size = "Medium";
    case "L":
        size = "Large";
    case "XL":
        size = "Extra Large";
        Default:
        size = "One Size Fits All";
}
