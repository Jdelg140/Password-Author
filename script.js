


// const lowerCaseArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// const upperCaseArray= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


const numbersArray= [1,2,3,4,5,6,7,8,9,0];
const specialCharactersArray= ["!","@","$","%","^","&","*","(",")","+","{","}","[","]",";",":","<",">","/","?","|","~"];
var options= [];
var passwordLength=[];




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function prompts(){
  options = [];
  passwordLength =parseInt(prompt("Password will need to be between 8 and 128 characters long, choose the number of characters you would like!"));
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters.")
    return false;
  }
  
  if (confirm("Would you like lower case letters in your password?"));{
    options = options.concat(lowerCaseLetters);
  }
  if (confirm("Would you like capitalized letters in your password?"));{
    options = options.concat(upperCaseLetters);
  }
  if (confirm("Would you like numbers in your password?"));{
    options = options.concat(numbersArray);
  }
  if (confirm("Would you like special characters in your password?"));{
    options = options.concat(specialCharactersArray);
  }
  return true;
}
  


function generatePassword(){
var secondPassword ="";
for(var i=0; i <passwordLength; i++){
 var letters = Math.floor(Math.random() * options.length);
 secondPassword=secondPassword+ options[randomIndex];
}
return secondPassword;
}



// lowerCase = 
//   upperCase = confirm("Would you like upper case letters in your password?");
//   numbers = confirm("Would you like numbers in your password?");
//   specialCharacters = confirm("Would you like special characters in you password?");

