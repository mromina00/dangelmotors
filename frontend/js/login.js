// Login
let cad4 = `
<div class="wrapper">
    <span class="icon-close"><i class='bx bxs-x-circle'></i></span>
    <div class="login">
        <h2>Iniciar Sesión</h2>
        <form action="" method="post">
            <div class="input-box-login">
                <span class="icon"><i class='bx bx-envelope'></i></span>
                <input type="email" id="email" required placeholder=" " >
                <label>Email</label>
            </div>
            <div class="input-box-login">
                <span class="icon"><i class='bx bx-lock-alt'></i></span>
                <input type="password" id="password" required placeholder=" " >
                <label>Contraseña</label>
            </div>
            <button type="button" class="btn-login1" onclick="login()">Iniciar Sesión</button>
        </form>
    </div>
</div>` 

document.querySelector(".login-container").innerHTML = cad4

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === 'admin@admin.com' && password === "admin123") {
        window.location.href = "admin.html";
    } else if (email === "usuario@usuario.com" && password === "prueba123") {
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas.")
    }
}

function logout() {
    window.location.href = "index.html"
}