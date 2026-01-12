//array 
//not necessary we have same type of element we can have different  type of element
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Wolverine"]
console.log(myArr[0]);


//Array methods


//to add element in Array
myArr.push(6)
myArr.push(7)
myArr.push(8)
console.log(myArr)

//pop don't require argument it simply delete last element.
myArr.pop()
console.log(myArr)


//unshift ->Add element in first index
myArr.unshift(9)
console.log(myArr)

//shift: Remove element from first index.no need to add argument in shift
myArr.shift()
console.log(myArr)


//includes :We ask given element is in array or not if given it give true otherwise it give false.
//indexof:It provide index of given element of array.

//join()->Add elements of array into a string 

const myjoin = myArr.join()
console.log(myjoin)//conversion of arry into string

const myn1 = myArr.slice(1, 3)//it provide from original array and don't disturb original copy
console.log("A: ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)//it disturb original copy of array and also provide extra element.
console.log("B: ", myArr);
console.log(myn2);

