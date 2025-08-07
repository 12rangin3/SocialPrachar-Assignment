// Q1: Declare a variable named age and assign it a value of 20. Print age to the console.
let age = 20;
console.log(age)

// Q2:Declare three variables in a single line: firstName, lastName, and country. Assign values to
//  these variables and display them.

const firstName = "swagat", lastName = "Edla", country ="India";
console.log(firstName);
console.log(lastName);
console.log(country);

//  Q3:Create two variables, itemPrice and itemQuantity, assign them numeric values. Print
//  their product as totalCost.

let itemPrice = 65;
let itemQuantity = 5;

let totalCost = itemPrice * itemQuantity;
console.log("Total cost of item:", totalCost)

//  Level 2: Scope and Hoisting
//  Q1:Create a variable name inside a function and try to access it outside the function. Explain
//  why you get an error.

function data(){
    
    let name = "Glenn Maxwell";
}

data();
console.log(name)
// i got referenceError : name is not defined

//  Q2:Declare a variable using var at the bottom of your code. Try to access it at the top of your
//  code and observe the result. Do the same with a let variable
console.log(name)
var name = "Hello Im VAR";
//its undefined
console.log(play);
let play = "Lets play Footbal"; // Cant access before initialization

console.log(hello);
const hello = "Happy Coding";

function swagat(){
    var sureName = "Edla.Swagat";
    console.log(sureName);//when i print inside the scope output is coming
}

swagat();
console.log(sureName) //reference Error

// Level 3: Redeclaration, Hoisting, and Scope Conflicts
// Q1:Declare a variable using var at the top of your code and redeclare it using let with the
//  same name. Note any errors or messages in the console.

var myName = "Abdul kalam";
let myName = "Abdul kalam";// uncought syntax Error myName

// Q2:Write code that uses a const variable in a function and then try to reassign it inside and
//  outside the function. Explain the results.

function data(){
    const name = "swagat";
    const name = "rangin";//syntax error identifier name;
    console.log(name);
}
data();
const name = "rangde"





