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
  "€"

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
  const len = lenEL.value;

  let password = '';

  for(let i=0; i<len, i++) {
    password += x;
  }

  EL
}

// // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// function getRandom(arr) {}

// Function to prompt user for password options
// function getPasswordOptions() {}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
