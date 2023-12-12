const { createApp } = Vue

    createApp({
        data() {
            return{
                vehiculos: [],
                url: 'https://mromina00.pythonanywhere.com/vehiculos',
                error: false,
                cargando: true,
                // atributos para guardar los valores del formulario
                id: 0,
                marca: "",
                modelo: "",
                anio: 0,
                estado: "",
                precio: 0,
                imagen: "",
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.vehiculos = data;
                        this.cargando = false
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })
            },
            eliminar(id) {
                const url = this.url + '/' + id;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text())
                    .then(res => {
                        alert('Registro Eliminado')
                        location.reload();
                    })
            },
            grabar() {
                let vehiculo = {
                    marca: this.marca,
                    modelo: this.modelo,
                    anio: this.anio,
                    estado: this.estado,
                    precio: this.precio,
                    imagen: this.imagen,
                }
                var options = {
                    body: JSON.stringify(vehiculo),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function() {
                        alert("Registro Grabado")
                        window.location.href = "./admin.html"
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Grabar")
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')