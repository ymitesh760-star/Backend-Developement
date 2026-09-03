//EMS Example

// export default function add(a,b) {
//     console.log (a+b)
// }

// export function mul (a,b){
//     console.log(a*b)
// }

// export function sub (a,b){
//     console.log(a-b)
// }


//CJS Example

// function add(a,b) {
//     console.log (a+b)
// }

// function mul (a,b){
//     console.log(a*b)
// }

// function sub (a,b){
//     console.log(a-b)
// }

// module.exports={add,mul,sub}


//Return Example (ESM)

// export function add(a,b) {
//     return (a+b)
// }

// export function mul (a,b){
//     return (a*b)
// }

// export function sub (a,b){
//     return (a-b)
// }

//Return Example (CJS)


function add(a,b) {
    return (a+b)
}

function mul (a,b){
    return(a*b)
}

function sub (a,b){
    return(a-b)
}

module.exports={add, mul, sub}