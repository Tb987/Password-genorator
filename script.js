// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength =parseInt(prompt("How long would you like your password?"))
  console.log(passwordLength)
  if (!passwordLength || passwordLength<8 || passwordLength>128) {
  alert("You must enter a number between 8-128")
  return
  }

  var lowercase=confirm("Do you want lower case charaters?")
  var uppercase=confirm("Do you want upper case charaters?")
  var charaters=confirm("Do you want special charaters?")
  var number=confirm("Do you want any numerical numbers?")
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
