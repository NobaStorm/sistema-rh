
window.onload = init;
var headers = {}
var url = 'http://localhost:3000';

function init() {

    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
    
        var paramstr = window.location.search.substr(1);
        var paramarr = paramstr.split("&");
        var params = paramarr[0]
        loadInfo(params);


        document.querySelector(".btn-primary").addEventListener('click', updateInfo)
    }
    else {
        window.location.href = "login2.html";
    }

}
function loadInfo(id) {
    axios.get(url + `/empleados/${id}`, headers).then(function (res) {
        console.log(res);
        employee = res.data.message[0];

        document.getElementById('emp_id').value = employee.EMP_ID;
        document.getElementById('name').value = employee.EMP_NAME;
        document.getElementById('lastName').value = employee.EMP_LASTNAME;
        document.getElementById('phone').value = employee.EMP_PHONE;
        document.getElementById('email').value = employee.EMP_EMAIL;
        document.getElementById('address').value = employee.EMP_ADDRESS;


    }).catch(function (err) {
        console.log(err);
    })
}


function updateInfo() {

    var emp_id = document.getElementById('emp_id').value;
    var emp_name = document.getElementById('name').value;
    var emp_lastname = document.getElementById('lastName').value;
    var emp_phone = document.getElementById('phone').value;
    var emp_email = document.getElementById('email').value;
    var emp_address = document.getElementById('address').value;

    console.log(emp_id);

    axios({
        method: 'put',
        url: `http://localhost:3000/empleados/${emp_id}`,
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
            alert("Usuario Actualizado Correctamente");
            window.location.href = "main.html";
        }
        else{
            alert("Error al actualizar información del Usuario");
        }

    }).catch(function(err){
        console.log(err);
    })
}