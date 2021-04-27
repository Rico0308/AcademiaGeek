import Ciclista from './Ciclista.js'

let ciclistas = []
var modalCiclista

function llenarArreglo(){
  if(localStorage.getItem('ciclistas')){
    ciclistas = JSON.parse(localStorage.getItem('ciclistas')).map(c => Object.setPrototypeOf(c, Ciclista.prototype))
  }
}

function registrarTiempo(c){
  for (let i = 1; i <= 5; i++) {
    c.registrarTiempo('carrera'+ i, Math.floor(Math.random() * 100))
  }
}

function pintarTabla(arregloCiclista){
  document.querySelector('#lista-ciclista').innerHTML = ""
  arregloCiclista.forEach((ciclista, i) => {
    document.querySelector('#lista-ciclista').innerHTML += `
    <td scope="col">${i+1}</td>
    <td scope="col">${ciclista.nombre}</td>
    <td scope="col">${ciclista.registroTiempos.carrera1}</td>
    <td scope="col">${ciclista.registroTiempos.carrera2}</td>
    <td scope="col">${ciclista.registroTiempos.carrera3}</td>
    <td scope="col">${ciclista.registroTiempos.carrera4}</td>
    <td scope="col">${ciclista.registroTiempos.carrera5}</td>
    <td>
    <a href="#"><i class="bi bi-eye-fill"></i></a>
    </td>
    `
  })
  document.querySelector('#lista-promedio').innerHTML = ""
  ciclistas.forEach((ciclista, i) => {
    document.querySelector('#lista-promedio').innerHTML += `
    <td scope="col">${i+1}</td>
    <td scope="col">${ciclista.nombre}</td>
    `
  })
}

window.addEventListener('load', e => {
  llenarArreglo()
  pintarTabla(ciclistas)

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  modalCiclista = new bootstrap.Modal(document.getElementById('modalAgregarCiclista'), {
    keyboard: false
  })

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})

document.querySelector("#frm-ciclista").addEventListener('submit', e => {

  if(document.querySelector("#frm-ciclista").checkValidity()){
    let corredor = new Ciclista()
    corredor.nombre = document.querySelector("#nombre-ciclista").value
    corredor.registroTiempos['carrera1'] = document.querySelector("#carrera-1").value
    corredor.registroTiempos['carrera2'] = document.querySelector("#carrera-2").value
    corredor.registroTiempos['carrera3'] = document.querySelector("#carrera-3").value
    corredor.registroTiempos['carrera4'] = document.querySelector("#carrera-4").value
    corredor.registroTiempos['carrera5'] = document.querySelector("#carrera-5").value

    ciclistas.push(corredor)
    pintarTabla(ciclistas)

    modalCiclista.toggle()
    localStorage.setItem('ciclistas', JSON.stringify(ciclistas))
  }else{

  }
  e.preventDefault()
})

document.querySelector('#frm-ciclista').addEventListener('submit', e => {
  e.preventDefault()
})

document.querySelector('#txt_buscar').addEventListener('onkeyup', e => {
  let parametro_busqueda = document.querySelector('#txt_buscar').value

  let arreglo_busqueda = ciclistas.filter(ciclista => {
    return ciclista.nombre.toLocaleLowerCase.indexOf(parametro_busqueda.toLocaleLowerCase()) != -1
  })
  pintarTabla(ciclistas)
})

// document.querySelector("#btn-guardar").addEventListener('click', e => {
//   e.preventDefault()
//   if(document.querySelector("#frm-ciclista").checkValidity()){
//
//   }else{
//     console.log("Error")
//   }
// })

//Se captura el evento cuando se presiona el botón
// document.querySelector("#btn_adicionar_ciclista").addEventListener('click', e => {
//   console.log(e)
//   e.preventDefault()
// })

//Se captura el evento Submit del Form
// document.querySelector("#frm-adicionar-ciclista").addEventListener('submit', e => {
//   console.log(e)
//   e.preventDefault()
// })
