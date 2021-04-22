
var planet_name = Array("Tierra", "Marte")
let distances = [3, 4, 5]
const size = [88, 211, 300]
const planets = []
const planet = {
  name: "Tierra",
  size: 300000,
  distance_to_the_earth: 0,
  distance_at_sun: 182525451,
  minerals: ["Oro", "Cobre", "Hierro"]
}

planets.push(planet)

//Operando como Función forma 1
// let resta = (n1, n2) => {
//   return n1 - n2
// }

// Operando como Función forma 2
let resta = (n1, n2) => n1 - n2

//Index representa la ubicación del elemento y arreglo el arreglo completo
// function foreach(planeta, index, arreglo){
//   console.log("El planeta es: " + planeta)
// }

//Funcionalidad con Arrow Function
const foreach = (planeta) => console.log("El planeta es: " + planeta)


// Operando como Procedimiento
// let resta = (n1, n2) => {
//   console.log(n1 - n2)
// }

planet_name[2] = "Jupiter"

console.log(planet_name)
console.log(distances)
console.log(size)

console.log("======OBJETO PLANETAS======")
console.log(planet)
console.log(planets)

let i = 0
console.log("======WHILE======")
while (i < 3) {
  console.log(planet_name[i])
  i = i + 1
}

console.log("======FOR======")
for (let j = 0; j < 3; j++) {
  console.log(distances[j])
}

console.log("======FOR IN======")
for (const key in planet_name) {
  console.log(planet_name[key])
}

console.log("======FOR OF======")
for (const planeta of planet_name) {
  console.log(planeta)
}

console.log(sumar(4, 14))

function sumar(n1, n2){
  return n1 + n2
}

console.log(resta(4, 2))  //Se llama como función
// resta(4, 2)  Se llama como procedimiento

//El For Each solo itera pero no retorna algo (return)
console.log("======FOR EACH ARROW FUNCTION======")
planet_name.forEach(foreach)

console.log("======FOR EACH FUNCIÓN ANÓNIMA======")
planet_name.forEach(function (planeta){
  console.log("El planeta es: " + planeta)
})

//El map itera y retorna (return)
console.log("======MAP======")
let resultado = planet_name.map((planeta, index) => {
  return "El tamaño de " + planeta + " es " + size[index]
})
console.log(resultado)

//El filter busca lo que cumpla una determinada condición dentro de la funciónf
console.log("======FILTER======")
let resultado_filter = size.filter((s) => {
  return s % 2 == 0
})
console.log(resultado_filter)

//El find busca exactamente un valor dentro del arreglo
console.log("======FIND======")
let resultado_find = size.find((value) => value % 2 == 0)
console.log(resultado_find)

console.log("======FIND OBJECT======")
let resultado_find_objet = planets.find((planet) => planet.name.toLowerCase() == "tierra")
console.log(resultado_find_objet)

console.log("======FIND OBJECT DESTRUCTURING======")
let resultado_find_objet_desc = planets.find(({name}) => name.toLowerCase() == "tierra")
console.log(resultado_find_objet_desc)

//El find index retorna el índice
console.log("======FIND INDEX======")
let resultado_find_index = planet_name.findIndex((p) => p.toLocaleUpperCase() == "MARTE")
console.log(resultado_find_index)

console.log("======INCLUDES======")
let resultado_includes = planet_name.includes("Tierra", 1)
console.log(resultado_includes)
