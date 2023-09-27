/* 
Programmer: Laura Castro
Date: September 25, 2023
Purpose: Write a script to implement a behavior on the website. This is to qualify for Chingu Voyage 46. Submission is due by the 26th
*/

// Add an event handler to name input field
document.getElementById("name").addEventListener('keydown', function validateInput(event){
    if(event.key === 'Enter'){
        // Create a regular expression 
       
        // Take this action after the enter key is pressed down
        var changeName = document.getElementById("name").innerHTML 
        
        // Prevent default behavior of form
        event.preventDefault();

    }
});
    
   
      

