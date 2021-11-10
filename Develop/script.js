// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var numChar = prompt("How long do you want your password to be?")
  numChar = parseInt(numChar)
  while (numChar < 8 || numChar > 128){
    alert("Password length needs to be at least 8 and no more than 128 characters")
    numChar = prompt("How long do you want your password to be?")
    numChar = parseInt(numChar)
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
