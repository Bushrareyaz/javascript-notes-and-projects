//if statement 
//Let's see if you are eligible to vote or not

let age = 25 ;
if(age >= 18){
    console.log("You CAN Vote!!");
}
if(age <18){
    console.log("You CANNOT Vote!!");
}

// ternary operator

let result = age >= 18 ? "adult" : "Not adult";
console.log(result);

// mode of screen (light or dark)

let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);

// if-else statement 
//check if number is even or odd

let number = 17;
if(number % 2 === 0){
    console.log(number,"is even");
} else {
    console.log(number,"is odd");
}


