/*var name = "jack";
var age = 23;

var message = "Hi, my name is " + name + " and I am " + age + " years old!";

console.log(message);*/

/*var firstName = "john";
var lastName = "jake";
var birthDate = "jan 1984";
var age = 43;

var loginMessage = "welcome, " + firstName;*/

//
//var total = 10;
//for (var x = 0; x < total; x++) {
//	console.log(x);
//}

//var students = ["john", "jacob", "jingle", "heimer", "smith"];
//
//for (var index = 0; index < students.length; index++) {
//	console.log(students[index]);
//}
//
//var evenArray = 15;
//
//for (var i = 0; i < 15; i++) {
//	console.log(i);
//}

// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;
//
// var length2 = 12;
// var width2 = 14;
// var area2 = length2 * width2;

// function area(length, width) {
//   return length * width;
// }
//
// var area1 = area(10, 15);
// console.log(area1);
//
// var bankBalance = 500;
// function makeTransaction(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Purchased!");
//   } else {
//     console.log("Insufficient funds!");
//   }
// }
//
// console.log(bankBalance);
// makeTransaction(79.00);
//
// console.log(bankBalance);
// makeTransaction(2.32);
//
// console.log(bankBalance);
// makeTransaction(10.45);
//
// console.log(bankBalance);
// makeTransaction(450.00);
//
// var transaction = function(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Purchased!");
//   } else {
//     console.log("Insufficient funds!");
//   }
// };
//
// var printCustomerName = function(first, last) {
//   console.log("First Name: " + name + "Last Name: " + last);
// }
//
// var applyForCreditCard = function(creditScore, soul) {
//   //call some crazy function to process app
// }
//
// var bankOperations = [];
// var bankOperations.push(printCustomerName);
// var bankOperations.push(applyForCreditCard);
// var bankOperations.push(applyForCreditCard);

function student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}


var student0 = {
  firstName: "jayne",
  lastName: "Loo",
  age: 7
  greeting: function() {
    return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
  }
};

var student2 = {};
student2.firstName = "zack";
student2.lastName = "bobo";
student2.age = 5;

var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student["firstName"]);
// console.log(student["lastName"]);

var students = [];
students.push(students0);
studends.push(studends1);
students.push(students2);


for (var index = 0; index < students.length; index++) {
  console.log(students[index]);
}
