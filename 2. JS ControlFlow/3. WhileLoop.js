// // WHile loop is used to repeat the code until the condition becomes. flase

// // A while loop evaluates the condition inside the parenthesis ().
// If the condition evaluates to true, the code inside the while loop is executed.
// The condition is evaluated again.
// This process continues until the condition is false.
// When the condition evaluates to false, the loop stops.

// // Coding as the princple DRY which means don't repeat yourself.

// // While Loop working.

// // while(condition){
//     // body of the code
// // }

// // Example 1

let i = 0;

while(i<5){
    i++
    console.log(i);
    
}


// // Here in the example the loops runs until the condition become false.

// Create a program for multiple of the number which is passed.

const number = +prompt("Enter the number");

let count = 10;

while(count <= 0){
     const product = number * count;
     console.log(product)
    count ++
}


// Here the above example code, the while loop works until the condition is false. 


// Do While Loop.
let i = 5;
do{
console.log(i);
i ++; 
}while(i<=4){

// }

// DO while works first with do code and check the condition later and if the condition is true, it get executed again and if it's false it stops the code. 