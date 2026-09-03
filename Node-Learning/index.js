// function study (){
//     console.log("Study Hard")
// }
// study();

// const sui = (a,b) => {
//     return a + b
// }

// console.log(sui(10,20))

//ESM Example

// import x from './second.js'
// import {sub} from './second.js'
// import {mul} from './second.js'


// x(8,6)
// sub(8,6)
// mul(8,6)


//CJS Example

// const {add, mul, sub} = require('./second.js')

// add(8,6)
// mul(8,6)
// sub(8,6)

//Return Example (ESM)

// import {add, mul, sub} from './second.js'

// console.log(add(8,6))
// console.log(mul(8,6))
// console.log(sub(8,6))


//Return Example (CJS)

const {add, mul, sub}=require ('./second.js')

console.log(add(8,6))
console.log(mul(8,6))
console.log(sub(8,6))