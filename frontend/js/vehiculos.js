const { createApp } = Vue
createApp({
    data() {
        return {
            vehiculos: [],
            url: 'https://mromina00.pythonanywhere.com/vehiculos',
            error: false,
            id: 0,
            marca: "",
            modelo: "",
            anio: 0,
            estado: "",
            precio: 0,
            imagen: ""
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vehiculos = data
                });
        }
    },
    created() {
        this.fetchData(this.url)
    }
}).mount('#app')