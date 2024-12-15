let lastName: string;

lastName = "Pradeep";

let newName = lastName.toUpperCase();
console.log(newName);

// Data types:
/*
string
number
boolean
Array
enum
tuple
any
void
never
*/

// Numbers
// let age = 20;

let age: number;
age = 13330;
age = 122.33; // decimal numbers also fine

let dob = "2034";
let result = parseInt(dob); // TS knows what data type for result is.

// boolean
let isValid: boolean = false;
console.log(isValid);

// array
let empList: string[];
empList = ["Regan", "Trevor"];

let empExists = empList.find((emp) => emp == "Regan");
console.log(empExists);

let deptList: Array<number>;
deptList = [1, 2, 3, 4, 5];

let numbersG = deptList.filter((num) => num > 2);
console.log(numbersG);

let number2 = deptList.find((num) => num == 2);
console.log(number2);

let sum = deptList.reduce((accumulator, curr) => accumulator + curr);
console.log(sum);

// enum
const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Red;

// Tuples
// to swap two numbers
let swapNumbers: [number, number];

function swapTwoNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbers = swapTwoNumbers(10, 20);
swapNumbers[0];
swapNumbers[1];

// ANY DATA TYPE
// ⚠️⚠️⚠️ DO NOT USE ANY DATA TYPE ANY WHERE IN CODE ⚠️⚠️⚠️

let department: any;
department = "100";
department = 12;
