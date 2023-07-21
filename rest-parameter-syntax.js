const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1,3,4)
console.log(sum);

let sum2 = sumAll(3,4,2,6,2,);

console.log(sum2);

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum +=i;
    }
    return sum;
}
let sum3 = sumRest (1, 3, 5, 2, 5, 1);

console.log(sum3);