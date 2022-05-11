
window.onload = init;
var headers = {}
var url = 'http://localhost:3000';
var employees_l = 0;

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadEmployees();
        document.querySelector('.btn-outline-primary').addEventListener('click', loadEmployeesName)
        document.querySelector('.btn-success').addEventListener('click', agregarEmp)
    }
    else {
        window.location.href = "login2.html";
    }
}

function loadEmployees() {
    axios.get(url + "/empleados", headers).then(function (res) {
        console.log(res);
        employees_l = res.data.message.length;
        console.log(employees_l);
        displayEmployees(res.data.message);

    }).catch(function (err) {
        console.log(err);
    })
}

function loadEmployeesName() {
    var nombre = document.getElementById('search').value;
    if (nombre === "") {
        loadEmployees();
    }
    axios.get(url + `/empleados/${nombre}`, headers).then(function (res) {
        console.log(res);
        
        var table_node = document.getElementsByTagName("table")[0];
        table_node.innerHTML = `       <tr>\n` +
            `            <th scope="col">Id</th>\n` +
            `            <th scope="col">Nombre</th>\n` +
            `            <th scope="col">Apellido</th>\n` +
            `            <th scope="col">Teléfono</th>\n` +
            `            <th scope="col">Correo</th>\n` +
            `            <th scope="col">Dirección</th>\n` +
            `            <th scope="col">Editar</th>\n` +
            `            <th scope="col">Eliminar</th>\n` +
            `        </tr>`;
        displayEmployees(res.data.message);

    }).catch(function (err) {
        console.log(err);
    })
}

function displayEmployees(employees) {
    var table_node = document.getElementsByTagName("table")[0];
    for (var i = 0; i < employees.length; i++) {
        table_node.innerHTML += `       <tr>\n` +
            `            <td>${employees[i].EMP_ID}</td>\n` +
            `            <td>${employees[i].EMP_NAME}</td>\n` +
            `            <td>${employees[i].EMP_LASTNAME}</td>\n` +
            `            <td>${employees[i].EMP_PHONE}</td>\n` +
            `            <td>${employees[i].EMP_EMAIL}</td>\n` +
            `            <td>${employees[i].EMP_ADDRESS}</td>\n` +
            `            <td><a class="btn btn-success" href="actualizar.html?${employees[i].EMP_ID}"  role="button">Editar</a></td>\n` +
            //`            <td><button class="btn btn-success" id =${employees[i].EMP_ID} type="button">Editar</button></td>\n` +
            `            <td><button class="btn btn-outline-danger" type="button">Eliminar</button></td>\n` +
            `        </tr>`
    }

}

function agregarEmp(){
    window.location.href = "agregar2.html";

}