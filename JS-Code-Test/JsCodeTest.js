//Javascript Coding Assignment
//Write a program to calculate the sum of three values:

let num1 = 10;
let num2 = "25";
let num3 = 20;

const sum = num1 + Number(num2) + num3;
console.log(sum);
//Write a program to calculate the Simple Interest using the formula:
// SI = (principal * rate * time) / 100

// Given:

// principal = 1000, rate = 5, time = 2

// Expected Output:

// Simple Interest is: 100

let principal = 1000;
let rate = 5;
let time = 2

const SI = (principal * rate * time) / 100;
console.log(SI)
// 4**.Write a program to calculate the total and average marks of three subjects.**

// Given:

// math = 78, science = 83, english = 91

// Expected Output:

// Total: 252

// Average: 84

let math = 78;
let science = 83;
let english = 91;

const total = math + science + english;
console.log(total);
const average = total/3;
console.log(average);

//Write a program to swap the values of two variables using a temporary variable.
// Given:

// a = 5, b = 10

// Expected Output:

// After swapping:

// a = 10

// b = 5
let a = 5;
let b = 10;

// ???
//Write a program to calculate and print the square and cube of a number.
Given:

// num = 6

// Expected Output:

// Square: 36

// Cube: 216

x = 6;
let square = x ** 2;
console.log(square);
let cube = x ** 3;
console.log(cube);

//7**.Write a program to evaluate the arithmetic expression:**

// result = (10 + 5) * 3 - 2

// Expected Output:

// Result: 43

let result = (10 + 5) * 3 - 2;
console.log(result);

//Write a program to calculate the new salary after a 20% hike.

// Given:

// Salary = ₹25,000

// Expected Output:

// New Salary: ₹30,000

let salary = 25000;
let hikePercentage = 20;

let newSalary = salary * hikePercentage / 100;
console.log(newSalary);


//9.Write a program to observe and explain the output of the following:

console.log(typeof value);// undefined

var value = 100;

value = value + "1";

console.log(value);// 1001

console.log(typeof value);// string

// Expected Output Format:

// (Explain each line’s output)

//Write a program to calculate the average of three numbers: 10, 20, and 30.
// Expected Output:

// Average is: 20

let a1 = 10;
let a2 = 20;
let a3 = 30;

const myAverage = (a1 + a2 + a3) / 3;
console.log(myAverage);