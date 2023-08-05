// The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

// syntax continue;

for (let i =1; i<=10 ; i++){
    if(i==7){
        continue;
    }
    console.log(i);
}

// Here is the for the loop in which continue is used and the loop is continued further when the condition becames true.
// 7 is nt printed because the condition becames true and the loop is skipped. 