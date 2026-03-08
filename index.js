// Understanding conditionals
// Valid voter:
// let age = +prompt("Enter your age:");

// if (isNaN(age === NaN)) {
//   console.log("wrong input");

// } else if (age >= 18) {
//   console.log("you can vote");

// } else {
//   console.log("you cannot vote");
// }

// Shop discount 

// let amount = +prompt("what is the total amount")
// if(amount > 0 && amount <= 5000){
//   console.log(amount)
// }

// else if(amount > 5000 && amount <= 7000){
//   console.log(amount-Math.floor((5*amount)/100));
// }

// else if (amount >7000 && amount <= 9000){
//   console.log(amount - Math.floor(10*amount/100));
// }

// else if (amount >9000 && amount <= 12000){
//   console.log(amount - Math.floor(20*amount/100));
// }

// else{
//   console.log("wrong input")
// }

// Alternate Method:

// let amount = +prompt("what is the total amount")
// let dis = 0; 
// if(amount > 0 && amount <= 5000){
//  dis = 0;
// }

// else if(amount > 5000 && amount <= 7000){
//   dis = 5;
// }

// else if (amount >7000 && amount <= 9000){
//  dis = 10;
// }

// else if (amount >9000 && amount <= 12000){
//   dis = 20;
// }

// else{
//   console.log("wrong input")
// }

// console.log(amount-Math.floor((dis*amount)/100));

// **************Bill calculation *********************
// if units > 400 per unit charges 13
// if units > 200 per unit charges 8
// let units = +prompt("Enter the Unints consumed:")
// let amount = 0;
// if(units>400){
//   amount = (units-400)*13 //3900
//   units = 400
// }
// // using another if because all conditions will be used:
// if(units > 200 && units <=400){
//   amount += (units - 200) * 8 //1600
//   units = 200;
// }

// if(units > 100 && units <= 200){
//   amount += (units - 100) *6;
//   units = 100;
// }

// amount += units*4;

// console.log(amount);