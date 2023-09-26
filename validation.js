/* 
Programmer: Laura Castro
Date: September 25, 2023
Purpose: Write a script to implement a behavior on the website. This is to qualify for Chingu Voyage 46. Submission is due by the 26th
*/

// Validate the data that is put in the text fields of the contact form.
function validateInput(event){
    if(event.key === 'Enter'){
    // Declare variables that store the user's input
    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    
    // Declare variables that will store the value of the input
    const inputName = userName.value;
    const inputEmail = "laura@gmail.com";

    //Define a regular expression to match only letters A-Z

    // Make sure that a list of characters are found in the email input
    emailChar = ['@', '.com', '.org', '.edu']
   // for(let char = 0; char < inputEmail.length; char++){
        console.log(inputEmail.splice(-4, inputEmail))
    //}

    }
    

    //Check that the email field contains an '@' symbol and a '.com'

    //Do not let user select text area field until the name and email fields are completed correctly

    function checkInput(event) {
        if (event.key === 'Enter') {
          // Get the input field element by ID
          const inputField = document.getElementById('textInput');
      
          // Get the input value
          const inputValue = inputField.value;
      
          // Define a regular expression to match only letters in the English alphabet
          const letterRegex = /^[A-Za-z]+$/;
      
          // Check if the input contains only letters
          if (letterRegex.test(inputValue)) {
            // Input is valid, clear the text field
            inputField.value = '';
      
            // Display a success message
            document.getElementById('message').textContent = 'Valid input: ' + inputValue;
          } else {
            // Input is invalid, display an error message
            document.getElementById('message').textContent = 'Invalid input: Please enter only alphabetical characters.';
          }
        }
      }
      
}
