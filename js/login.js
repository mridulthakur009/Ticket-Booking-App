function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData  && storedUserData.password === password) {
      alert('Login successful!');
    
    } else {
      alert('Invalid email or password.');
      return false;
    }

    window.location.href = "../pages/home-page.html";

}