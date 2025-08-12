// Day_3_Mastery : Arithmetic Operators  
// 1.  Divide two numbers and print the quotient. 

// let a = 10;
// let b = 3;

// let result = a/b;
// console.log(result)//3.333333333
// console.log(Math.floor(result));//3
//2.   Use unary plus (+) to convert a string "123" into a number

// let c = "123";
// let d = Number(c)
// console.log(typeof d);// Number
// console.log(d)//123
// let a = "123";
// let num = +a;
// console.log(num)
// console.log(typeof num)

//3.   Find the square of a number using the exponentiation operator 
// (**).
// let b = 5;

// let square = b ** 2;
// console.log(square);//25
//4.  Write a program to extract the last digit of a number using % 
// operator.

// let digit = 496;

// let lastDigit = digit% 10;
// console.log(lastDigit);

// 5. Write a program to remove the last digit of a number using / 
// operator. 
// let num = 457;
// let lastDigitRemove = Math.floor(num/10)
// console.log(lastDigitRemove);
//6. Write a program to get the last two digits of a number using % 
// operator. 
// let num1 = 567;
// let lastTwodigit = num1 % 100;
// console.log(lastTwodigit)
//7. Write a program to remove the last two digits of a number using / 
// operator. 
// let digit = 767;
// let RemoveLastTwoNum =  Math.floor(digit / 100);
// console.log(RemoveLastTwoNum)//7
//8. Write a program to swap the last and first digit of a two-digit 
// number using only arithmetic operators. 
// let num = 57;
// let firstDigit = Math.floor(num/10);
// console.log(firstDigit)
// let lastDigit = num % 10;
// console.log(lastDigit);
// let swapped = (lastDigit * 10) + firstDigit;
// console.log(swapped);
//9. Write a program to reverse a two-digit number without using 
// strings. 
// let a = 56;

// let lastdigit = Math.floor(a % 10);
// console.log(lastdigit)//6
// let firstdight = a / 10;
// console.log(Math.floor(a / 10))

// let reverse = (lastdigit * 10) + firstdight;
// console.log(Math.floor(reverse));


//10. Write a program to find the sum of digits of a two-digit number 
// using % and /.
// let digit = 67;
// let firstdight = Math.floor(digit/10);
// console.log(firstdight)
// let lastDigit = Math.floor(digit%10);
// console.log(lastDigit)
// let sum = firstdight + lastDigit;
// console.log(sum)//13
//11. Write a program to multiply the digits of a two-digit number. 
// let digit = 98;

// let firstdight = Math.floor(digit /10);
// console.log(firstdight);
// let lastDigit = Math.floor(digit % 10);
// console.log(lastDigit)
// let multiply = firstdight * lastDigit;
// console.log(multiply)
//12. Write a program to add 0.1 and 0.2 and display the floating-point 
// result. 
// let a = 0.1;
// let b = 0.2;

// let sum = a + b;
// console.log(sum)//o.3000000000
// console.log(parseFloat(sum));//0.30000000000000

//14. If x = 5, what will be the final value of y after executing:  
// let y = x++ + ++x + --x + x--;and what will x be at the end? Explain 
// step-by-step evaluation. 
let x = 5;
let y =  x++ + ++x + --x + x--;
console.log(y)





