function errorSweetAlert(message) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        confirmButtonText: 'OK'
    });
}
function logout(bool){

    sessionStorage.removeItem("token");

    if(bool){
        window.location.href = "pages/login.html";
    }else{
    
    window.location.href = "login.html";
    }
}


const token = sessionStorage.getItem('token');
        const loginSignup = document.getElementById('loginSignup');
        const butoni = document.getElementById('buttoni');

        if(token){
            loginSignup.style.display = 'none';
        }else{
            butoni.style.display = 'none';
        }



        