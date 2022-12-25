//variables in javaScript

//var a = 7; // this method is deprecated
let b = 9; 

console.log(b);

//variable datatype can be changed during runtime
b = "harsh";  
console.log(b);

// var is a globally scoped while let and const are local scoped
// var can be updated  and redeclared within its scope
// let can be updated but cannot be re declared
// const can neither be updated nor be re-declared 


let x = "harry";

{
    let x = "harmione";
//  let x = "ronald"; // Not possible 
    // cannot again declare a let variable more than once
}


const author = "JK Rowling"; 
// const is a constant 
let author = 5;