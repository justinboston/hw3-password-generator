// Assignment Code
function generatePassword() {
  // Character Sets
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var selectedArray = []


  var passwordLength = getPasswordLength();

  var charTypeSelected = false;
  // This loop ensures the user selects at least one character type
  while (charTypeSelected == false) {
    var lowercaseCharacters = getChoice("lowercase");
    var uppercaseCharacters = getChoice("uppercase");
    var numericCharacters = getChoice("numeric");
    var specialCharacters = getChoice("special");
    if ((uppercaseCharacters) || (lowercaseCharacters) || (numericCharacters) || (specialCharacters)) {
      charTypeSelected = true;
    } else {
      window.alert("You must select at least one character type.")
    }
  }

  // add code to change password variable.
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowercaseCharacters);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(uppercaseCharacters);
  }
  if (numericCharacters) {
    selectedArray = selectedArray.concat(numericCharacters);
  }
  if (specialCharacters) {
    selectedArray = selectedArray.concat(specialCharacters);
  }

  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordString;
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));

    // Checking here to make sure the user entered a valid number.
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }

  return userChoice;
}

// window.prompt
function getChoice(currentOption) {
  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  // This loop ensures the user enters a valid response.
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    // Added the line below for ease of usability on mobile devices as some of them automatically capitalize when entering input.
    userChoice = userChoice.toLowerCase();
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);