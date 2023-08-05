// Break Statements.

// Break statement is used to stop the code immediatelty

// for (let i =1 ; i <=5 ; i ++){
//     break; 
//     console.log(i);
    
//  }

// The above breaks the loops and gives the output nothing as the first commands is break and the compiler exits the loop.

// for (let i = 1; i<=10; i++){
//     if(i==7){
        
//         break;
//     }
//     console.log(i);
// }

// Here in the above the break statement works when the if condition get true, the loop stop. 


// BREAK WITH WHILE LOOP.

// while(true){
//     let number = +prompt("Enter the number");
//     if ( number<0){
//         console.log("It's negative")
//         break;
//     }
//     console.log("It's positive");
// }

// Here the above code if the number is negative, if code block runs and break the code. 
// If it's positive the complier skips the if block of code and gives the output.


let number = +prompt("Enter the number : ");

if(number<9){
    console.log(number);

}
else if (number == 0){
    console.log("Enter the correct value. ");
}