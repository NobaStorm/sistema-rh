window.onload = init;
var headers = {}
var url = 'http://localhost:3000';


function init() {

    if (localStorage.getItem("token")) {


        document.querySelector(".btn-primary").addEventListener('click', postInfo)
    }
    else {
        window.location.href = "login2.html";
    }

}

function postInfo(){

    var emp_name = document.getElementById('name').value;
    var emp_lastname = document.getElementById('lastName').value;
    var emp_phone = document.getElementById('phone').value;
    var emp_email = document.getElementById('email').value;
    var emp_address = document.getElementById('address').value;


    axios({
        method: 'post',
        url: `http://localhost:3000/empleados/`,
        data: {
            EMP_NAME: emp_name,
            EMP_LASTNAME: emp_lastname,
            EMP_PHONE : emp_phone,
            EMP_EMAIL: emp_email,
            EMP_ADDRESS: emp_address
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res) {
        console.log(res)

        if (res.data.code === 200){
            alert("Usuario Agregado Correctamente");
            window.location.href = "main.html";
        }
        else{
            alert("Error al ingresar Usuario favor de volver a intentarlo");
        }

    }).catch(function(err){
        console.log(err);
    })
}