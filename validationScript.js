    // JavaScript code for form validation
      // Retrieve the input field value
        document.addEventListener('DOMContentLoaded', function() {
            let form = document.getElementById('myForm');
            let inputField = document.getElementById('inputField');

        // Prevent form from submitting
            form.addEventListener('submit', function(event) {
                event.preventDefault(); 
        
                let inputValue = inputField.value; 
        // Regular expression to match alphanumeric input
                let alphanumericRegex = /^[a-zA-Z0-9]+$/;
        
                if (inputValue === '') {
                    displayErrorMessage('Input is empty');
                } else if (!alphanumericRegex.test(inputValue)) {
        
        // Invalid input: display error message
                    displayErrorMessage('Input alphanumeric value');
                } else {
                    displayConfirmation('Form submitted successfully');
                    form.reset(); 
                }
            });
        
            function displayErrorMessage(message) {
                let errorMessage = document.createElement('div');
                errorMessage.textContent = message;
                errorMessage.style.color = 'red';
                errorMessage.id = 'error-message';
        
    
                let ErrorMessage = document.getElementById('error-message');
                if (ErrorMessage) {
                    ErrorMessage.replaceWith(errorMessage);
                } else {
                    form.appendChild(errorMessage);
                }
            }
        
            function displayConfirmation(message) {
                alert(message); 
            }
        });
        