// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ["0123456789"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["abcdefghijklmnopqrstuvwxyz"];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const passwordEL = document.getElementById("password");
const copyEL = document.getElementById("copy");
const lengthEL = document.getElementById("length");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");


function getupperCasedCharacters() {
  return upperCasedCharacters[
    Math.floor(Math.random() * upperCasedCharacters.length)
  ];
}

function getlowerCasedCharacters() {
  return lowerCasedCharacters[
    Math.floor(Math.random() * lowerCasedCharacters.length)
  ];
}

function getnumericCharacters() {
  return numericCharacters[
    Math.floor(Math.random() * numericCharacters.length)
  ];
}

function getspecialCharacters() {
  return specialCharacters[
    Math.floor(Math.random() * uspecialCharacters.length)
  ];
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

// // Function for getting a random element from an array
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
