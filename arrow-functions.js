/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwonumber(a, b){
//     //code block
//     return a+b;
// }
// let sum =addTwonumber (3, 6);
// console.log(sum);


const addTwonumber = (a, b) =>{
    //code block
    return a+b;
}
let sum =addTwonumber (3, 6);
console.log(sum);

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters
const addTwonumber2 = (a, b) => a + b;

let sum2 = addTwonumber2(34, 2);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);

saySomething("Hi, how are you?");

const sayHello = () => console.log("Hello!");

sayHello();

// Returning Multiple Lines
const returnMultiplelines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultiplelines());