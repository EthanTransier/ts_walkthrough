// let numbers=[1,2,'2'] // JS arrays are dynamic
//What if you pass the array to a function expecting only number then...
let numbers:number[]=[1,2,3]
// numbers.forEach(n=>n.)

// Tuples: When working with values using different types
let user: [number,string,boolean] = [1,"Bernard", true]
user.push(2, 'Khadeem')
user[0]=42
console.log(user)
// readonly
