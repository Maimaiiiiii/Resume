function myPassword (){

    const passwordInput = document.getElementById("password");
          const ageInput = document.getElementById("age");
          const messageElement = document.getElementById("message");
          if (passwordInput.value.length < 8) {
            messageElement.innerText = "Password must be at least 8 characters.";
            messageElement.style.color = "red";
            return;
          }
        
          if (ageInput.value < 21) {
            messageElement.innerText = "No minors are permitted!";
            messageElement.style.color = "red";
            return;
          }
        
          messageElement.innerText = "Your account has been successfully created!";
          messageElement.style.color = "green";
  }