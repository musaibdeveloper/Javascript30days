// JAVASCRIPT FUNCTIONS. 

/*
A function is a block of code that performs a specific task.
Function is used to run the codes of line with define task.
Synatx : function name() {    
}

*/


// Example

function name(){
    console.log("Musaibdeveloper");
}

// Calling the function.

name();

// The above code is a normal example of function.

// 2. 
function Greeting (){
    console.log("Hello!, I hope you are going Good :)");
}

// Calling the function. 1


Greeting();

// The above is a simple example of function


// Benefits of Using a Function
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.


// Function with Parameters. 

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

function add (a,b){
   console.log(a*b/a+b);
}
 add(4145 , 5484);

// The function the parameters are set and the code is executed when the function is called.

// When the function is called the values are given at calling paranthesis.



// Function Return. 

// The return statement can be used to return the value to a function call.

// The return statement denotes that the function has ended. Any code after return is not executed.

// If nothing is returned, the function returns an undefined value.


function adding(a,b) {
    return a+b;
    console.log();
    }
    let number1 = +prompt("ENter the number : ")
    let number2 = +prompt("ENTER THE NUMBER : ")
    
    
    let result = adding(number1 , number2);
    
    console.log(result);


    // The above code returns the value of the function and store it in the varaiable "result"

    // The further code is not executed after the retuen statement.



