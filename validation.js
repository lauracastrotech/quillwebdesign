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
    const inputEmail = email.value;

    //Define a regular expression to match only letters A-Z
    const letterRegex = /^[A-Za-z]+$/;

    // Make sure that a list of characters are found in the email input
    emailChar = ['@', '.com', '.org', '.edu']
   //x for(let char = 0; char < inputEmail.length; char++){
        console.log(inputEmail.splice(-4, inputEmail))
    //}

    }
      
}
