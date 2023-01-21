// Array of special characters to be included in password
var symbols = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
  "<",
  ">",
  "|",
  "¬",
  "¦",
  "€",
];

// Array of numeric characters to be included in password
var numbers = ["0123456789"];

// Array of lowercase characters to be included in password
var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];

// Array of uppercase characters to be included in password
var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const passwordEL = document.getElementById("password");
const copyEL = document.getElementById("copy");
const lengthEL = document.getElementById("length");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");

// // Function for getting a random element from an array

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// // Function to generate password with user input
function generatePassword() {
  const length = lengthEL.value;

  let password = "";

  for (let i = 0; i < length; i++) {
    const x = generateX();
    password += x;
  }
  passwordEL.innerText = password;
}

// Function to prompt user for password options
function generateX() {
  const xs = [];

  if (upperEL.checked) {
    xs.push(getUppercase());
  }

  if (lowerEL.checked) {
    xs.push(getLowercase());
  }

  if (numberEL.checked) {
    xs.push(getNumber());
  }

  if (symbolEL.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

// // Add event listener to generate button
generateEL.addEventListener("click", generatePassword);

// function getRandom(arr) {}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
