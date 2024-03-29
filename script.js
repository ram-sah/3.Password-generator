// Assignment Code
var button = document.getElementById("generate");

//seting up variables for differents choices of characters for password from users
var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerEl = "abcdefghijklmnopqrstuvwxyz";
var specialEl = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~«µ¶¿¥æ®¤¢†©ð";
var numEl = "0123456789";

//get user input
//Creating an object to save users choices
var userChoices = {};
var charLength = parseInt(prompt("How many characters do you want to generate select (8 to 128) ?"));
if (charLength >= 8 && charLength <= 128) {
  var upperCase = confirm("Click ok to confirm Upper Cases:");
  var lowerCase = confirm("Click ok to confirm Lower Cases:");
  var specChar = confirm("Click ok to confirm SpecialCharacters:");
  var numChar = confirm("Click ok to confirm Numerical Characters:");
}
else {
  alert("you need to choose 8 to 128 characters click refresh to start over");
}
function generatePassword() {
  // Saving user's answers from prompted questions
  if (upperCase) {
    userChoices["upperEl"] = upperEl;
  }
  if (lowerCase) {
    userChoices["lowerEl"] = lowerEl;
  }
  if (specChar) {
    userChoices["specialEl"] = specialEl;
  }
  if (numChar) {
    userChoices["numEl"] = numEl;
  }
  console.log(`here is user's choice ${userChoices }`);

}
// calling the generatePassword function
generatePassword();

// Write password to the #password input
function writePassword() {
  let finalPassword = "";
  for (var i = 0; i < charLength; i++) {

    let passwordEls = Object.keys(userChoices);
    let randonEls = userChoices[passwordEls[Math.floor(Math.random() * passwordEls.length)]];

    console.log(randonEls);

    let char = getRandomCharacter(randonEls);
    finalPassword += char;

    console.log(char);
  }
  return finalPassword;
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)];
}


// Add event listener to generate button
button.addEventListener("click", function () {
  password.innerHTML = writePassword();
})
