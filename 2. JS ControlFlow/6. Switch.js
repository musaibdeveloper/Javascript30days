// Switch is used to make decision making progarms.

// Syntax : "switch ( ){}



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// Example: Print the days according to numbers.

let number = 1;

switch (number) {
    case 1:
        console.log("Monday");
        break;

     case 2 :
     console.log("Tuesday");
     break;

     case 3 :
        console.log("Wednesday");
        break;


     case 4 :
        console.log("Thursaday");
        break;


     case 5 :
        console.log("Firday");
        break;

        case 6 :
            console.log("Saturday");
            break;

        case 7:
            console.log("Sunday");
            break;

    default:
        console.log("Invalid number ");
        break;
}


// The above switch statements are used and the input switches the output according to input. 

// default is executed when the input doesn't match. 