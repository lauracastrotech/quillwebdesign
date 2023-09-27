/* 
Programmer: Laura Castro
Date: September 25, 2023
Purpose: Write a script to implement a behavior on the website. This is to qualify for Chingu Voyage 46. Submission is due by the 28th
*/

// Add an event handler to name input field
document.getElementById("name").addEventListener('keydown', function validateInput(event){
    
    // Once the key value is found in the event object, check to see when it is "Enter" and take action
    if(event.key === 'Enter'){
        
        // Create a regular expression 
        const pattern = /^[A-Za-z]+$/;
        
        // Take this action after the enter key is pressed down
        let inputName = event.target.value; 

        // Assign message to value that will be appended to the #nameInput to form-control
        let warning = "Oops! Only use characters A-Z for your name";

        // Compare the input name to a regular expression and test that all characters are alphabetical
        if(!pattern.test(inputName)){
            
            // Send message to screen underneath name text field
            document.getElementById("nameInput").innerHTML = warning;
        }
        else{
            document.getElementById("nameInput").innerHTML = "";
        }
        
        // Prevent default behavior of form
        event.preventDefault();
    }
});
    
   
      

