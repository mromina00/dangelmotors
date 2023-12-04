// Barra de Navegación
let cad = `
    <nav class="nav">
        <!-- logo -->
        <a href="#inicio" class="logo">
            <img src="../imagenes/logonavbar.webp" alt="logo dangel motors">
        </a>
        <!-- lista de navegación -->
        <ul class="navbar">
            <li><a class="active" href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#vehiculos">Vehículos</a></li>
            <li><a href="#dolar">Dolar</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        <!-- Botón LogIn -->
        <a class="btnLogin-popup" href="#" id="nav-login-btn">Iniciar Sesión</a>
        <!-- ícono menú desplegable -->
        <button class="navtoggle">
            <i class='bx bx-menu'></i>
        </button>
    </nav>
    <div class="menu-desplegable">
        <div class="li">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#vehiculos">Vehículos</a></li>
            <li><a href="#dolar">Dolar</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </div>
        <a class="btnLogin-popup" href="#" id="menu-login-btn">Iniciar Sesión</a>
    </div>`

document.querySelector("header").innerHTML = cad

//Javascript Menú Desplegable
const navtoggle = document.querySelector('.navtoggle')
const toggle_icon = document.querySelector('.navtoggle i')
const menu_desplegable = document.querySelector('.menu-desplegable')

navtoggle.onclick = function (){
    menu_desplegable.classList.toggle('open');
    const isOpen = menu_desplegable.classList.contains('open')

    toggle_icon.classList = isOpen
    ? 'bx bx-x'
    : 'bx bx-menu'
}

// Footer
let cad1 = `
    <div class="footer-container">
        <div class="footer-logo">
            <a href="#inicio" class="logofooter"><img src="../imagenes/logonavbar.webp" alt="logo"></a>
        </div>
        <div class="row">
            <div class="footer-col">
                <h3>Páginas</h3>
                <a href="#inicio">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#vehiculos">Vehículos</a>
                <a href="#contacto">Contacto</a>
            </div>
            <div class="footer-col">
                <h3>Horarios</h3>
                <span>Lunes - Viernes</span>
                <p>8:30hs - 12:30hs <br> 16:30hs - 20:30hs</p>
                <span>Sábados</span>
                <p>8:30hs - 12:30hs</p>
            </div>
            <div class="footer-col">
                <h3>Dirección</h3>
                <p>General Alvear - Mendoza</p>
                <p>Av. Libertador Norte 102</p>
                <p>Tel.: +54 9 2625 40-7443</p>
            </div>
            <div class="footer-col">
                <div class="redes">
                    <h3>Nuestras redes</h3>
                    <a href="https://www.facebook.com/dangelmotors" target="_blank"><i class="bx bxl-facebook"></i></a>
                    <a href="https://wa.me/c/5492625407443" target="_blank"><i class="bx bxl-whatsapp"></i></a>
                    <a href="https://www.instagram.com/dangelmotors/" target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a href='mailto: dangelmotors@gmail.com' target="_blank"><i class="bx bxl-gmail"></i></a> 
                </div>
            </div>
        </div>
    </div>`

document.querySelector("footer").innerHTML = cad1

// Copyright
let cad2 = `
<p>&#169; DangelMotors Todos los Derechos Reservados.</p>`

document.querySelector(".copyright").innerHTML = cad2

// Botón Scroll
let cad3 = `
<i class='bx bx-chevron-up'></i>`

document.querySelector(".btn-scrolltop").innerHTML = cad3

const btn_scrolltop = document.getElementById("btn_scrolltop");
btn_scrolltop.addEventListener('click',() =>{
    window.scrollTo(0, 0);
});

window.onscroll = () => {
    add_btn_scrolltop();
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 300){
        btn_scrolltop.classList.remove("btn-scrolltop-on");
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on");
    }
}

// Login
let cad4 = `
<div class="wrapper">
    <span class="icon-close"><i class='bx bxs-x-circle'></i></span>
    <div class="login">
        <h2>Iniciar Sesión</h2>
        <form action="acceso-login" method="post">
            <div class="input-box-login">
                <span class="icon"><i class='bx bx-envelope'></i></span>
                <input type="email" required placeholder=" " >
                <label>Email</label>
            </div>
            <div class="input-box-login">
                <span class="icon"><i class='bx bx-lock-alt'></i></span>
                <input type="password" required placeholder=" " >
                <label>Contraseña</label>
            </div>
            <button type="submit" class="btn-login1">Iniciar Sesión</button>
        </form>
    </div>
</div>` 

document.querySelector(".login-container").innerHTML = cad4

// Botón de Inicio de Sesión ventana emergente

document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const navLoginBtn = document.getElementById('nav-login-btn');
    const menuLoginBtn = document.getElementById('menu-login-btn');

    // Función para mostrar/ocultar la pantalla de inicio de sesión
    function toggleLoginContainer() {
        loginContainer.style.display = loginContainer.style.display === 'none' ? 'flex' : 'none';
    }

    // Agrega eventos de clic a los botones
    navLoginBtn.addEventListener('click', toggleLoginContainer);
    menuLoginBtn.addEventListener('click', toggleLoginContainer);

    // Cerrar la pantalla de inicio de sesión al hacer clic en la 'X'
    const iconClose = document.querySelector('.icon-close');
    if (iconClose) {
        iconClose.addEventListener('click', toggleLoginContainer);
    }
});