// let a = 4;
// let b = 6;
// console.log(a+b);


// console.log("2"+2);
// let a = 10;
// let b = 20;
// console.log("the sum of 10 and 20 is " + a + b); this won't work

// console.log(a+b+" is the sum of 10 and 20") this will work 

// as the operations works from left to right 
// 1+"1" = 11;
// 1-1=0;
// 1/1=1
// 1*1=1

// let a = Number(prompt("Enter A"))
// let b = Number(prompt("Enter B"))

// console.log(a + b)

// a = 10;
// b = 20;
// a = a + b; 
// // a value now 30
// b = a - b;
// // b value now 10
// a = a - b;
// // b value now 20
// console.log(a)
// console.log(b)

// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a)
// console.log(b)
// destructuring assignment in js

// getting exact value rather than decimal number.
// let a = 3;
// let b = 2;
// console.log(Math.floor(a/b))

// ison operators <> <= >= != == === !==
// console.log(10<5);
// will return false:
// console.log(10!==11);
// returns false 
// === compares as well as its datatype

// logical operators:
// && || !
// && both must be true so result true
// || at least one must be true

// unary operator ++ --
// ++ increment 
// -- decrement
// ++a pre a++ post

// let i = 11;
// i = i++ + ++i;
//i++ will give 11 and ++i will give 13 as i already got to 12 with i++ operation:
// console.log(i);

// let a = 11;
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c =" + c);

// let b = true;
// b = b++;
// console.log(b);

// unary op not applied on const:
// 15++ will throw error:

// let a = 10;
// let b = ++(a++);
// console.log(b);
// will throw error

// Math methods:
// Math.round
// Math.ceil
// Math.floor
// Math.random
// Math.sqrt
// tofixed()
// Math.cbrt
// Math.abs(-15)
// Math.max(numbers)
// Math.min(numbers)
// Math.trunc(removes decimal values after point)