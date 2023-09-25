// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    alert("Password must contain some of the following characters: uppercase, numbers, and/or at least one special character."); 
    var passwordlength = parseInt(prompt("Please enter a password between 8 and 128 characters for the length of your password")); 
    if (passwordlength < 8 || passwordlength > 128) { // sets min and max 
        alert("PLEASE ENTER PASSWORD BETWEEN 8 AND 128 CHARACTERS")
        return; 
    }
}

// what kind of characters to use 
var lowercaseChar = confirm("Would you like to include lower case characters in your password"); 
var uppercaseChar = confirm("Would you like to include upper case characters in your password");
var numberChar = confirm("Would you like to include numbers in your password"); 
var specialChar = confirm("Would you like to include special characters in your password"); 

console.log (lowercaseChar, uppercaseChar, numberChar, specialChar); 

// at least one of the charactes needs to be used 
if (!lowercaseChar && !uppercaseChar && !numberChar && !specialChar) {
    alert("PLEASE SELECT AT LEAST ONE CHARACTER TYPE FOR SECURE PASSWORD"); 
    return; 
}

// identifying the character types and characterizing 
var LcaseChar = ("abcdefghijklmnopqrstuvwxyz"); 
var UcaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var NChar = ("0123456789"); 
var SChar = ("!?@#$%^&*():;,."); 

// if true it collects the data to add to the user password 

var userPassword = ""; 
console.log (userPassword); 
    if (lowercaseChar === true) {
        console.log ("before", userPassword) // refers to the previous variable string as an empty one to add on to 
        userPassword += LcaseChar; 
        console.log ("after", userPassword) // if true, it will add on to the userPassword
    }

    if (uppercaseChar === true) {
        console.log ("before", userPassword); 
        userPassword += UcaseChar; 
        console.log ("after", userPassword); 
    }
    if (numberChar === true) {
        console.log ("before", userPassword); 
        userPassword += NChar; 
        console.log ("after", userPassword); 
    }
    if (specialChar === true) {
        console.log ("before", userPassword); 
        userPassword += SChar; 
        console.log ("after", userPassword); 
    }

console.log (userPassword); 









// generate and randomize the order of characters 
var newGeneratedPassword = ""; 
for (var i = 0; i < passwordlength; i++) {
    var randompass = Math.floor(Math.random() * userPassword.length); 
    newGeneratedPassword += userPassword[randompass]; 
}
console.log(newGeneratedPassword)
    return newGeneratedPassword; 
    // takes input and randonly genreates the new password 


/* 
// write code here
var length = prompt("Enter password length from 8 to 128 characters"); 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
*/ 

function writePassword() { 
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password"); 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

