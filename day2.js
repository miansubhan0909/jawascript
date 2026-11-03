// 7. Convert the string "100" into a number.
const numberFromString = Number("100");
console.log("Number:", numberFromString);

// Check the data types of five different variables.
const studentName = "Subhan";
const studentAge = 20;
const isStudent = true;
const emptyValue = null;
let notAssigned;

console.log("studentName:", typeof studentName);
console.log("studentAge:", typeof studentAge);
console.log("isStudent:", typeof isStudent);
console.log("emptyValue:", typeof emptyValue);
console.log("notAssigned:", typeof notAssigned);

// 8. Convert a string into uppercase and lowercase.
const message = "JavaScript is easy";
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());

// 9. Compare two numbers using comparison operators.
const firstNumber = 10;
const secondNumber = 5;
console.log("firstNumber > secondNumber:", firstNumber > secondNumber);
console.log("firstNumber < secondNumber:", firstNumber < secondNumber);
console.log("firstNumber === secondNumber:", firstNumber === secondNumber);

// 10. Use AND, OR, and NOT operators.
const hasIdCard = true;
const hasTicket = false;
console.log("AND:", hasIdCard && hasTicket);
console.log("OR:", hasIdCard || hasTicket);
console.log("NOT:", !hasTicket);

// 11. Calculate a number's square and square root.
const number = 25;
console.log("Square:", number ** 2);
console.log("Square root:", Math.sqrt(number));

// 12. Predict the output of a program using different operators.
const a = 8;
const b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);