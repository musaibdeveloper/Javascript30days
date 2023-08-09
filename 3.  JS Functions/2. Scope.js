// JavaScript has two types of scope. 

// 1. Local scope which is alos callled as Block scope.







function name (){
    let fname = "syed";
    console.log(fname);
}

name();

console.log(fname); // error. 

// The above varaible is declare within the function code and it's called as local scope.

// The variable can be used in the function limits{ } it'self.


// GLOBAL SCOPE


// let fname = "Musaib"

// function name (){
//     let fname = "syed";
//     console.log(fname);
// }

// name();

// console.log(fname);

/*
The above code is the same. but the varaible whivh is declare is outside the function and the variable can be used anywhere in the code. 

*/