

const lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialCharactersArray = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}", "[", "]", ";", ":", "<", ">", "/", "?", "|", "~"];


function prompts() {

  let passwordLength = parseInt(prompt("Password will need to be between 8 and 128 characters long, choose the number of characters you would like!"));

  if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.")
    return null;
  }
  var hasLower = confirm("Would you like lower case letters in your password?");
  var hasUpper = confirm("Would you like capitalized letters in your password?");
  var hasNum = confirm("Would you like numbers in your password?");
  var hasSpecial = confirm("Would you like special characters in your password?");

  if (hasLower === false && hasUpper === false && hasNum === false && hasSpecial === false) {
    alert("Must select at least one character type.");
    return null
  }
  var passwordOptions = {
    length: passwordLength,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNum: hasNum,
    hasSpecial: hasSpecial
  }
  return passwordOptions;

}

function getRandom(arr) {
  var i = Math.floor(Math.random() * arr.length);
  var e = arr[i];
  return e;
}

function generatePassword() {
  var options = prompts();
  var result = [];
  var possibleChar = [];
  var guarenteedChar = [];

  if (options.hasLower) {
    possibleChar = possibleChar.concat(lowerCaseArray);
    guarenteedChar.push(getRandom(lowerCaseArray));
  }
  if (options.hasUpper) {
    possibleChar = possibleChar.concat(upperCaseArray);
    guarenteedChar.push(getRandom(upperCaseArray));
  }
  if (options.hasNum) {
    possibleChar = possibleChar.concat(numbersArray);
    guarenteedChar.push(getRandom(numbersArray));
  }
  if (options.hasSpecial) {
    possibleChar = possibleChar.concat(specialCharactersArray);
    guarenteedChar.push(getRandom(specialCharactersArray));
  }
  for (var i = 0; i < options.length; i++) {
    var char = getRandom(possibleChar);
    result.push(char);
  }
  for (var i = 0; i < guarenteedChar.length; i++) {
    result[i] = guarenteedChar[i];
  }
  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




