
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
    }
    else {
        window.location.href = "login2.html";
    }

}
function loadInfo(name) {
    axios.get(url + `/empleados/${name}`, headers).then(function (res) {
        console.log(res);
        employee = res.data.message[0];
        console.log(employee.EMP_ID, employee.EMP_NAME, employee.EMP_LASTNAME,employee.EMP_PHONE)
        document.getElementById('emp_id').value = name;
        document.getElementById('name').value = employee.EMP_NAME;
        document.getElementById('lastName').value = employee.EMP_LASTNAME;
        document.getElementById('phone').value = employee.EMP_PHONE;
        document.getElementById('email').value = employee.EMP_EMAIL;
        document.getElementById('address').value = employee.EMP_ADDRESS;


    }).catch(function (err) {
        console.log(err);
    })
}