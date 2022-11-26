// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['*', '&', '$', '#', '@', '?', '^', '%', '!', '('];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];

function getPasswordCriteria() {
  var userChosePasswordLength = prompt("How long would you like your password?");
  
  while((userChosePasswordLength < 8) || (userChosePasswordLength > 126)){
    userChosePasswordLength = prompt("Please enter a number between 7 and 127");}

  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseLowerCase = confirm("Do you want lower case letters in your password?")
  var userChoseUpperCase = confirm("Do you want upper case letters in your password?");
  var userChoseSymbols = confirm("Do you want symbols in your password?")

  var options = {
    userChoseNumbers: userChoseNumbers,
    userChosePasswordLength: userChosePasswordLength,
    userChoseUpperCase: userChoseUpperCase,
    userChoseLowerCase: userChoseLowerCase,
    userChoseSymbols: userChoseSymbols
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(numbers);
    }if (userChose.userChoseSymbols) {
      availableChars = availableChars.concat(symbols);
    }if (userChose.userChoseUpperCase) {
      availableChars = availableChars.concat(upperCase);
    }if (userChose.userChoseLowerCase) {
      availableChars = availableChars.concat(lowerCase);
    }



    for(var i = 0; i < userChose.userChosePasswordLength; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

