console.log(location.search)
var id = location.search.substr(4)
console.log(id)
const { createApp } = Vue
    createApp({
        data() {
            return{
                id: 0,
                marca: "",
                modelo: "",
                anio: 0,
                estado: "",
                precio: 0,
                imagen: "",
                url: 'https://mromina00.pythonanywhere.com/vehiculos/'+id,
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.id = data.id
                        this.marca = data.marca
                        this.modelo = data.modelo
                        this.anio = data.anio
                        this.estado = data.estado
                        this.precio = data.precio
                        this.imagen = data.imagen
                    })
                    .catch(err =>{
                        console.error(err);
                        alert("Error al Modificar")
                    })
            },
            modificar() {
                let vehiculo = {
                    marca: this.marca,
                    modelo: this.modelo,
                    anio: this.anio,
                    estado: this.estado,
                    precio: this.precio,
                    imagen: this.imagen
                }
                var options = {
                    body: JSON.stringify(vehiculo),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function (){
                        alert("Registro Modificado")
                        window.location.href = "./admin.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Modificar")
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')