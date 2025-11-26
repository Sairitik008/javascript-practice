const express = require("express")

let PORT = 8000;

const app = express()

if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x); // 10 (var escapes the block)
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError



//types of Basic datatype
let age = 25;
let price = 100.89;

let firstname = "Ram";
let lastname = "Shyam";

let isLoggined = true;

let nothing = null;//object
let notDefined;

let big = 900719925474099n;
let id = Symbol("userId")


console.log(typeof age)
console.log(typeof firstname)
console.log(typeof isLoggined)
console.log(typeof nothing)
console.log(typeof notDefined)
console.log(typeof big)
console.log(typeof id)


//Non primitive datatypes

//object
const user = {
    name: "Sai",
    age: 24,
}

const numbers = [1, 2, 4, 5, 6];


function employee(salary, bonus) {
    let result = (bonus * salary) / 100;
    console.log(`employee salary : ${salary} and 5% bonus of ${result}`)
}

employee(10000, 5);


//Date is also a object
let d = new Date()
console.log(d.getDate())
console.log(typeof d)

console.log(typeof user)
console.log(typeof numbers)
console.log(typeof employee)




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})