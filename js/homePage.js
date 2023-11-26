document.addEventListener('DOMContentLoaded', function(){
    preventUserFromEntering();
});
function preventUserFromEntering(){
let isLoggedIn = localStorage.getItem('isLoggedIn');
    if(!isLoggedIn){
        window.location.href = '../pages/login.html'
    }
}

function logOut(){
    localStorage.setItem('isLoggedIn', true);
    window.location.href = '../pages/login.html'
}