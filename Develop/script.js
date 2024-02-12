// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";

  // add code to change passqword variable.

  // window.prompt
  // window.confirm

  return password; // return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
