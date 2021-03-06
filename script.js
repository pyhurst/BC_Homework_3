// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numList = ['0','1','2','3','4','5','6','7','8','9'];
var specialList = ['!','@','#','$','%','^','&','*','-','_','/',':',';','?','<','>',' ','"',"'",'(',')','+','.','=','[',']','`','~','|',`\\`];

// Generate Password

function generatePassword(){
  var passLengthPrompt = prompt('How many characters long do you want the password?');
  var createdPass = [];
  var finalPass = [];

  if(passLengthPrompt > 7 && passLengthPrompt < 129){
    var lowerCaseConfirm = confirm('Would you like to include lowercase letters?');
  } else {
    alert('Not a valid length. Must be 8-128 characters');
    return;
  }

  if(lowerCaseConfirm){
    // If confirmed, it will push each element of lowerCaseLetters array into the createdPass array
    for(i=0;i<lowerCaseLetters.length;i++){
      createdPass.push(lowerCaseLetters[i]);
    }
    var upperCaseConfirm = confirm('Would you like to include uppercase letters?');
  } else{
    var upperCaseConfirm = confirm('Would you like to include uppercase letters?');
  }

  if(upperCaseConfirm){
    for(i=0;i<upperCaseLetters.length;i++){
      createdPass.push(upperCaseLetters[i]);
    }
    var numConfirm = confirm('Would you like to include numbers?');
  } else{
    var numConfirm = confirm('Would you like to include numbers?');
  }

  if(numConfirm){
    for(i=0;i<numList.length;i++){
      createdPass.push(numList[i]);
    }
    var specialConfirm = confirm('Would you like to include special characters?');
  } else {
    var specialConfirm = confirm('Would you like to include special characters?');
  }
  
  if(specialConfirm){
    for(i=0;i<specialList.length;i++){
      createdPass.push(specialList[i]);
    }
  } else if(lowerCaseConfirm === false && upperCaseConfirm === false && numConfirm === false){
    alert('You must select at least 1 set of characters!');
    return generatePassword();
  }

  // Transforms passLength from a string to a number
  var passLength = parseInt(passLengthPrompt);
  // console.log(passLength);
  // console.log(createdPass.length);

  // Randomly generates an index to push random elements into a new array
  for(i=0;i<passLength;i++){
    randomIndex = Math.floor(Math.random()*createdPass.length);
    finalPass.push(createdPass[randomIndex]);
  }

  // Joins the final array into a string
  var final = finalPass.join('');

  return final;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");

  
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
