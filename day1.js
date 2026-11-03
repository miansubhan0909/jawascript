// Day 1: JavaScript ki basic cheezen
// JavaScript mein chhote aur bare letters alag hote hain.
// Is liye "name" aur "Name" do alag variables hain.

// Variable aik label wale box ki tarah hota hai jismein hum data rakhte hain.
let name = "Subhan"; // Text ko string kehte hain.
let age = 20; // Poore numbers ko number kehte hain.
let isLearning = true; // true ya false ko boolean kehte hain.

// Output: console.log() terminal mein hamara message dikhata hai.
console.log("Hello, " + name + "!");
console.log("Age:", age);
console.log("Still learning JavaScript:", isLearning);

// var, let aur const teeno variables banate hain,
// lekin inka use thora different hota hai:

var oldStyle = "var ko change aur dobara declare kar sakte hain";
var oldStyle = "Yeh kaam karta hai, lekin var se kabhi confusion ho sakti hai.";

let city = "Lahore";
city = "Islamabad"; // let ki value baad mein change kar sakte hain.
// let city = "Karachi"; // Ek hi block mein dobara banane par error aayega.

const country = "Pakistan";
// country = "India"; // const ki value dobara assign nahi kar sakte.

console.log("var example:", oldStyle);
console.log("let example:", city);
console.log("const example:", country);

// Input ka matlab: user se koi jawab lena.
// Node.js mein input lene ke liye readline use karte hain.
const readline = require("readline");

// Yeh computer ke input aur output ko connect karta hai ya function same asa e likja jata ha
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// User se sawal poochte hain.
// User ka jawab favoriteColor variable mein save ho jata hai.
input.question("What is your favorite color? ", (favoriteColor) => {
  // Ab user ka diya hua jawab screen par dikhate hain.
  console.log("Nice! You like " + favoriteColor + ".");
  // Kaam khatam hone ke baad input ko band kar dete hain.
  input.close();
});
