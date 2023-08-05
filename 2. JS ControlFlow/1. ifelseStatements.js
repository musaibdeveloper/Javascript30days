//  You can use the JavaScript if...else statement to create a program that can make decisions.

// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. 

// if else is all about decision making. 

Syntax = 
let a =10

if(a=10){
    console.log("a will be the output");
}

// The above is if statement.

// 2. Example

let score = 40;

if(score>=50){
    console.log("You have passed the test :)");
}

// if the score is above the output will be You have passed the test :)

// Now we have understood how if works

// ifelse statments. 

const score = 250;

if(score>=50){
    console.log("passed");
}
else{
    console.log("Failed");
}

// if else worke when the condition is true if is executed and if its false the else is executed.

// esleif Statements.

// JavaScript if...else if statement
// The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else if...else can be used.

const score = 5;


if(score>100){
    console.log("Invalid");
} 
else if (score< 0){
    console.log("Invalid");
} else if (score>35){
    console.log("Passed");
}
else {
    console.log("Failed");
}

// Here the above condition s are checked and executed accordingly


// Nested ifesle statement. 

// We can write if esle staement with in if esle statement, this techinque is called as Nested 

const number = const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}




// Practice Create a program to check the numner is positive or negative?

const number = prompt("Enter the number : ")

if(number>0){
    console.log("Number is positive")
} 
else if (number<0) {
    console.log("Number is negative")
}
else {
    console.log("Number is invalid")
}