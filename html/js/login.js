window.onload = init;

function init(){
    
    document.querySelector('.btn-primary').addEventListener('click', login);
    
}

function login() {
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/admin/login',
        data: {
            ADMIN_EMAIL: mail,
            ADMIN_PASSWORD: pass
        }
    }).then(function(res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            window.location.href = "main.html";
        }
        else {
            alert("Usuario y/o Contraseña incorrectos");
        }

    }).catch(function(err){
        console.log(err);
    })

}