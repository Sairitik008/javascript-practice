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





app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})