// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCaseArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbersArray=["1","2","3","4","5","6","7","8","9","0"]
var specialCharactersArray=["!","@","$","%","^","&","*","(",")","+","{","}","[","]",";",":","<",">","/","?","|","~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var passwordLength = prompt("Password will need to be between 8 and 128 characters long, choose the number of characters you would like!")
  var lowerCase = confirm("Would you like lower case letters in your password?")
  var upperCase = confirm("Would you like upper case letters in your password?")
  var numbers = confirm("Would you like numbers in your password?")
  var specialCharacters = confirm("Would you like special characters in you password?")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

