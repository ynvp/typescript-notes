// Mention data type along side the argument
// add return type for returning values to ensure return stmt and it's value type

// 3 WAYS TO WRITE A FUNC IN JS
// Named function
// put ? for optional parameters
function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2; // TERNARY OP
}
console.log(add(1, 2));
console.log(add(1, 2, 3));

// Arrow function
// num3 is optional and if there is no value coming in 10 will be used
const sub = (num1: number, num2: number, num3 = 10): number =>
    num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 1222));

// Function expression
// ...num3 is array {rest params in javascript}
const multiply = function (
    num1: number,
    num2: number,
    ...num3: number[] // holds all other values in array other than num1, num2
): number {
    return num1 * num2 * num3.reduce((acc, curr) => acc * curr, 1);
    // do not forget about initial value in reduce
};
console.log(multiply(3, 2000));
console.log(multiply(1, 2000, 3, 4, 5));
