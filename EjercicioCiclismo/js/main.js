import Ciclista from './Ciclista.js'

const ciclistas = []

function llenarArreglo(){
  let ciclista1 = new Ciclista()
  ciclista1.nombre = "Juan Perez"
  registrarTiempo(ciclista1)

  let ciclista2 = new Ciclista()
  ciclista2.nombre = "Pedro Gomez"
  registrarTiempo(ciclista2)

  ciclistas.push(ciclista1)
  ciclistas.push(ciclista2)
}

function registrarTiempo(c){
  for (let i = 1; i < 5; i++) {
    c.registrarTiempo('carrera'+ i, Math.floor(Math.random() * 100))
  }
}

window.addEventListener('load', e => {
  llenarArreglo()
  console.log(ciclistas)
})
