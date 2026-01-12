const marvel_heros = ["Spiderman", "Ironman", "Thor"]
const dc_heros = ["Superman", "Batman", "Flash"]

//push will work on existing array.

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

//concat
// const all_heros = marvel_heros.concat(dc_heros)//it return new array
// console.log(all_heros)


//spread operator is used to spread elements of array
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_Array = another_array.flat(Infinity)//it goes to depth of array and provide array inside another array in single collection
// console.log(real_another_Array)

// console.log(Array.isArray("Hitesh"))//in this check given collection is array or not
// console.log(Array.from("Hitesh"))//convert string into array


//to create array of different members

let mem1 = "Sagar"
let mem2 = "Anmol"
let mem3 = "Ashwin"
console.log(Array.of(mem1, mem2, mem3))

