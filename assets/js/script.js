// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // This code is asking how long you want your password to be and also giving you criteria when you put a wrong answer
  var numChar = prompt("How long do you want your password to be?")
  numChar = parseInt(numChar)
  while (numChar < 8 || numChar > 128){
    alert("Password length needs to be at least 8 and no more than 128 characters")
    numChar = prompt("How long do you want your password to be?")
    numChar = parseInt(numChar)
  }
  //This code is asking questions on what characters your password should included but also you must answer one of them true in order for your password to generate
  var lowCase = confirm("Would you want the password to use lowercase letters?")
  var upCase = confirm("Would you want the password to use uppercase letters?")
  var numBers = confirm("Would you want the password to use numbers?")
  var speChar = confirm("Would you want the password to use special characters?")
  while(!(lowCase || upCase || numBers || speChar)){
      alert("at least one character type should be selected")
      lowCase = confirm("Would you want the password to use lowercase letters?")
      upCase = confirm("Would you want the password to use uppercase letters?")
      numBers = confirm("Would you want the password to use numbers?")
      speChar = confirm("Would you want the password to use special characters?")
  }
  //This code is adding the needed characters
  var characters = "";
  if (lowCase){
    characters += "qwertyuiopasdfghjklzxcvbnm"
  }
  if (upCase){
    characters += "QWERTYUIOPASDFGHJKLZXCVBNM"
  }
  if (numBers){
    characters += "1234567890"
  }
  if (speChar){
    characters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
 //This code is looping to find random characters to genegrate password
  var password = "";
  for (var index = 0; index < numChar; index++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
