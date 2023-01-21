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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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

copyEL.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordEL.innerText;
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password Copied to Clipboard");
});
// function getRandom(arr) {}

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
