// Assignment Code
var generateBtn = document.querySelector("#generate");

//seting up variables for differents choices of characters for password from users
var upperEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerEl = "abcdefghijklmnopqrstuvwxyz";
var specialEl = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~«µ¶¿¥æ®¤¢†©ð";
var numEl = "0123456789";
var values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~«µ¶¿¥æ®¤¢†©ð";

//get user input 
  var charLength = prompt("How many characters do you want to generate select (8 to 128) ?");
  if (charLength >= 8 && charLength <= 128) {
  var upperCase= confirm("Click ok to confirm Upper Cases:");
  var lowerCase= confirm("Click ok to confirm Lower Cases:");
  var specChar = confirm("Click ok to confirm SpecialCharacters:") ;
  var numChar = confirm("Click ok to confirm Numerical Characters:") ;
  } 
  else {
    alert("you need to choose 8 to 128 characters click refresh to start over");
  }
  
//Creating an object to save users choices
var userChoices = {};

function generatePassword (){
  // Saving user's answers from prompted questions
  if(upperCase){
    userChoices["upperEl"] = upperEl;
  }
  if (lowerCase){
    userChoices["lowerEl"] = lowerEl;    
  }
  if (specChar){
    userChoices["specialEl"] = specialEl;
  }
  if (numChar){
    userChoices["numEl"] = numEl;
  }
  console.log(userChoices);
  
}
// calling the generatePassword function
  //generatePassword();

// Write password to the #password input
function writePassword() {
let finalPassword = "";
for (var i = 0; i < charLength; i++){

  let passwordEls = Object.keys(userChoices);
  let randonEls = passwordEls[Math.floor(Math.random() * passwordEls.length)];

  console.log(randonEls);
  
  let char = getRandomCharacter(userChoices[randonEls]);
  finalPassword += char;

  console.log(char);
}
return finalPassword;
}
/*
function getRandomCharacter(str){
  return str[Math.floor(Math.random()* str.length)];
}
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

    passwordText.value = password;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/