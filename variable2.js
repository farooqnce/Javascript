
let str2 = "Saravanan"; // This is global variable because it is declared outside of any function or block scope
function f1(){
let str1 = "farooq";// This is local variable because it is declared inside the function scope
console.log(str1);  // This will print "farooq" because str1 is accessible inside the function scope
}

f1();
// console.log(str1); // This will cause an error because str1 is not accessible outside the function scope

console.log(str2); // This will print "Saravanan" because str2 is accessible outside the function scope
