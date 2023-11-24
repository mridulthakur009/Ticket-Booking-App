function validateForm() {
    let firstName = document.querySelector("#fName").value.trim();
    let lastName = document.querySelector("#lName").value.trim();
    let email = document.querySelector("#email").value.trim();
    let mobileNumber = document.querySelector("#mobNumber").value.trim();
    let password = document.querySelector("#password").value.trim();
  
    let firstNameRegex = /^[a-zA-Z]+$/;
    if (!firstNameRegex.test(firstName)) {
      document.querySelector("#firstNameError").innerHTML = "First name must only contain letters.";
    } else {
      document.querySelector("#firstNameError").innerHTML = "";
    }
  
    if (firstName.length > 10) {
      document.querySelector("#firstNameError").innerHTML = "First name must be less than 10 characters.";
    }
  
    let lastNameRegex = /^[a-zA-Z]+$/;
    if (!lastNameRegex.test(lastName)) {
      document.querySelector("#lastNameError").innerHTML = "Last name must only contain letters.";
    } else {
      document.querySelector("#lastNameError").innerHTML = "";
    }
  
    if (lastName.length > 10) {
      document.querySelector("#lastNameError").innerHTML = "Last name must be less than 10 characters.";
    }
  
    let emailRegex = /^[\w-._]+@[\w-._]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(email)) {
      document.querySelector("#emailError").innerHTML = "Please enter a valid email address.";
    } else {
      document.querySelector("#emailError").innerHTML = '';
    }
  
    let mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      document.querySelector("#mobileNumberError").innerHTML = "Mobile number must be 10 digits and only contain numbers.";
    } else {
      document.querySelector("#mobileNumberError").innerHTML = '';
    }
  
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    if (!passwordRegex.test(password)) {
      document.querySelector("#passwordError").innerHTML = "Password must be between 8 and 16 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    } else {
      document.querySelector("#passwordError").innerHTML = '';
    }
  }
  