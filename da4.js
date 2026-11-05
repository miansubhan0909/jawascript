// Day 4: Numbers, Operators, Booleans aur Type Conversion
// Is file ko run karne ke liye terminal mein likhein:
// node da4.js

// --------------------------------------------------
// 1. Numbers
// --------------------------------------------------

let age = 20;
let price = 150.50;

console.log("Age:", age);
console.log("Price:", price);

// --------------------------------------------------
// 2. Arithmetic operators
// --------------------------------------------------

const firstNumber = 10;
const secondNumber = 5;

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus (remainder):", firstNumber % 3);
console.log("Exponentiation:", 2 ** 3);

// Increment se value mein 1 add hota hai.
let count = 5;
count++;
console.log("Increment ke baad:", count);

// Decrement se value mein se 1 minus hota hai.
let remaining = 5;
remaining--;
console.log("Decrement ke baad:", remaining);

// Postfix pehle purani value print karta hai, phir value increase hoti hai.
let postfixValue = 5;
console.log("Postfix result:", postfixValue++);
console.log("Postfix ke baad:", postfixValue);

// Prefix pehle value increase karta hai, phir new value print hoti hai.
let prefixValue = 5;
console.log("Prefix result:", ++prefixValue);

// --------------------------------------------------
// 3. Assignment operators
// --------------------------------------------------

let score = 10;
score += 5; // score = score + 5
score -= 2; // score = score - 2
score *= 2; // score = score * 2
score /= 2; // score = score / 2
score %= 4; // score = score % 4
score **= 2; // score = score ** 2
console.log("Assignment operators ke baad score:", score);

// --------------------------------------------------
// 4. Operator precedence
// --------------------------------------------------

// Multiplication pehle hoti hai, is liye result 20 hai.
const normalOrder = 10 + 5 * 2;
console.log("Normal precedence:", normalOrder);

// Parentheses addition ko pehle karwa dete hain, is liye result 30 hai.
const changedOrder = (10 + 5) * 2;
console.log("Parentheses ke saath:", changedOrder);

// --------------------------------------------------
// 5. Math object
// --------------------------------------------------

console.log("Round:", Math.round(4.6));
console.log("Floor:", Math.floor(4.9));
console.log("Ceil:", Math.ceil(4.1));
console.log("Trunc:", Math.trunc(4.9));
console.log("Square root:", Math.sqrt(25));
console.log("Power:", Math.pow(2, 3));
console.log("Random number:", Math.random()); // 0 se 1 se chhota number

// --------------------------------------------------
// 6. Booleans aur comparison operators
// --------------------------------------------------

const studentAge = 20;
const passingMarks = 50;
const studentMarks = 80;

console.log("Age greater than 18:", studentAge > 18);
console.log("Age less than 18:", studentAge < 18);
console.log("Age at least 18:", studentAge >= 18);
console.log("Marks exactly 80:", studentMarks === 80);
console.log("Marks 40 nahi hain:", studentMarks !== 40);

// Boolean ki sirf do values hoti hain: true aur false.
const isStudent = true;
const isPassed = false;
console.log("Is student:", isStudent);
console.log("Is passed:", isPassed);

// == sirf value check karta hai aur type convert kar sakta hai.
// === value aur data type dono check karta hai; aam tor par === behtar hai.
console.log("Loose equality:", 10 == "10");
console.log("Strict equality:", 10 === "10");

// --------------------------------------------------
// 7. Logical operators
// --------------------------------------------------

console.log(
  "AND (dono conditions true):",
  studentAge >= 18 && studentMarks >= passingMarks
);
console.log(
  "OR (kam az kam ek condition true):",
  studentAge >= 18 || studentMarks >= 90
);
console.log("NOT (true ko false karta hai):", !(studentAge >= 18));

// --------------------------------------------------
// 8. Truthy aur falsy values
// --------------------------------------------------

// Falsy examples: false, 0, "", null, undefined aur NaN.
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(1):", Boolean(1));
console.log('Boolean(""):', Boolean(""));
console.log('Boolean("Hello"):', Boolean("Hello"));
console.log("Boolean(null):", Boolean(null));
console.log('Boolean("0") - string truthy hai:', Boolean("0"));

// --------------------------------------------------
// 9. Type conversion: manual conversion
// --------------------------------------------------

const ageText = "20";
const convertedAge = Number(ageText);
console.log("String ko number:", convertedAge);
console.log("Converted type:", typeof convertedAge);
console.log("Number ko string:", String(25));
console.log("1 ko boolean:", Boolean(1));
console.log("parseInt:", parseInt("25.8", 10));
console.log("parseFloat:", parseFloat("25.8"));

// --------------------------------------------------
// 10. Type coercion: automatic conversion
// --------------------------------------------------

// + string ke saath concatenation karta hai.
console.log('"5" + 5:', "5" + 5); // "55"
// -, * aur / string number ko automatically number bana dete hain.
console.log('"5" - 2:', "5" - 2); // 3
console.log('"5" * 2:', "5" * 2); // 10

// --------------------------------------------------
// 11. Complete coding practice: 12 small programs
// --------------------------------------------------

// 1. Apna naam, age aur college print karna.
const myName = "Subhan";
const myAge = 20;
const college = "My College";
console.log("1.", myName, myAge, college);

// 2. var, let aur const ke examples.
var oldVariable = "var";
let changeableVariable = "let";
const fixedVariable = "const";
changeableVariable = "let ki value change ho sakti hai";
console.log("2.", oldVariable, changeableVariable, fixedVariable);

// 3. First name aur last name ko mila kar full name banana.
const givenName = "Subhan";
const familyName = "Khan";
console.log("3. Full name:", givenName + " " + familyName);

// 4. Five subjects ka total aur average nikalna.
const subjectMarks = [80, 75, 90, 85, 70];
const totalMarks = subjectMarks[0] + subjectMarks[1] + subjectMarks[2]
  + subjectMarks[3] + subjectMarks[4];
const averageMarks = totalMarks / subjectMarks.length;
console.log("4. Total:", totalMarks, "Average:", averageMarks);

// 5. 25 ko 4 se divide karne par remainder.
console.log("5. Remainder:", 25 % 4);

// 6. "100" ko number mein convert karna.
console.log("6. Converted 100:", Number("100"));

// 7. Five different variables ke data types check karna.
const typeText = "Hello";
const typeNumber = 100;
const typeBoolean = true;
const typeEmpty = null;
let typeMissing;
console.log("7.", typeof typeText, typeof typeNumber, typeof typeBoolean);
console.log("   ", typeof typeEmpty, typeof typeMissing);

// 8. String ko uppercase aur lowercase mein convert karna.
const sentence = "JavaScript Is Easy";
console.log("8. Uppercase:", sentence.toUpperCase());
console.log("   Lowercase:", sentence.toLowerCase());

// 9. Do numbers ko compare karna.
const compareOne = 15;
const compareTwo = 10;
console.log("9.", compareOne > compareTwo, compareOne < compareTwo);

// 10. AND, OR aur NOT use karna.
const hasTicket = true;
const hasIdCard = false;
console.log("10. AND:", hasTicket && hasIdCard);
console.log("    OR:", hasTicket || hasIdCard);
console.log("    NOT:", !hasIdCard);

// 11. Number ka square aur square root nikalna.
const squareNumber = 25;
console.log("11. Square:", squareNumber ** 2);
console.log("    Square root:", Math.sqrt(squareNumber));

// 12. Different operators ka output predict karna.
const operationA = 8;
const operationB = 3;
console.log("12. Add:", operationA + operationB);
console.log("    Subtract:", operationA - operationB);
console.log("    Multiply:", operationA * operationB);
console.log("    Divide:", operationA / operationB);
console.log("    Remainder:", operationA % operationB);

// --------------------------------------------------
// 12 important output-based questions
// --------------------------------------------------

let outputA = 10;
const outputB = "20";
console.log("Question 1 - a + b:", outputA + outputB); // "1020"
console.log("Question 1 - a - b:", outputA - outputB); // -10

let outputX = 5;
console.log("Question 2 - x++:", outputX++); // 5
console.log("Question 2 - ++x:", ++outputX); // 7

console.log("Question 3 - typeof string:", typeof "Hello");
console.log("Question 3 - typeof number:", typeof 100);
console.log("Question 3 - typeof null:", typeof null); // JavaScript ka old behavior: object

let outputScore = 10;
outputScore += 5;         
outputScore *= 2;
outputScore -= 10;
console.log("Question 4:", outputScore); // 20
                                  
console.log("Question 5 - AND:", 5 > 3 && 10 < 20);
console.log("Question 5 - OR:", 5 > 10 || 10 < 20);
console.log("Question 5 - NOT:", !true);