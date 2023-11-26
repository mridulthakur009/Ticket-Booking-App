function validateLogin() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let storedUserData = JSON.parse(localStorage.getItem(email));

    if (storedUserData  && storedUserData.password === password) {
      alert('Login successful!');
    
    } else {
      document.getElementById('userError').textContent=' * Invalid email or password.';
      return false;
    }

    localStorage.setItem('isLoggedIn', 'true');

    window.location.href = "../pages/home-page.html";

}