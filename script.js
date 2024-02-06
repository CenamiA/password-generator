// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwdLength;
let specialChar;
let numChar;
let lowerCaseChar;
let upperCaseChar;

// Function to prompt user for password options
function getPasswordOptions() {

  passwdLength = prompt("How many characters would you like your password to contain? Enter a number between 8 and 128");

  if (isNaN(passwdLength)) {
    alert("Password length must be provided as a number. Please try again");
    return false;
  }

  if (passwdLength < 8 || passwdLength > 128) {
    alert("password length should be at least 8 characters and no more than 128 characters. Please try again");
    return false;
  }

  specialChar = confirm("Click ok to confirm including special characters");

  numChar = confirm("Click ok to confirm including numeric characters");

  lowerCaseChar = confirm("Click ok to confirm including lowercase characters");

  upperCaseChar = confirm("Click ok to confirm including uppercase characters");

  // validating that at least one character type will be selected.

  if (specialChar === null && numChar === null && lowerCaseChar === null && upperCaseChar === null) {
    return alert("You must select at least one character type");
  }
}

// Function for getting a random element from an array
let getRandom = function (arr) {
  console.log(arr[Math.floor(Math.random() * arr.length)]);
}

// Function to generate password with user input

let newArr = []; // empty array will be used to concatenate existing arrays
let generatedPsswd = ""; // empty string will be used to store the generated password

function generatePassword() {
  // validating statements - if statements true, existing arrays will be added to new array

  if (specialChar === true) {
    newArr = newArr.concat(specialCharacters);
  }

  if (numChar === true) {
    newArr = newArr.concat(numericCharacters);
  }

  if (lowerCaseChar === true) {
    newArr = newArr.concat(lowerCasedCharacters);
  }

  if (upperCaseChar === true) {
    newArr = newArr.concat(upperCasedCharacters);

  }
  // Looping through password length and generate random password based on what number the user selected between 8-128

  for (let i = 0; i < passwdLength; i++) {
    let element = Math.floor(Math.random() * newArr.length);

    generatedPsswd = generatedPsswd + newArr[element];

  }
  return generatedPsswd;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);