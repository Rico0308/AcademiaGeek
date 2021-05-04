let favs = []

function llenarArreglo(){
  if(localStorage.getItem('favoritos')){
    favs = JSON.parse(localStorage.getItem('favoritos'))
  }
}

function pintarTabla(favoritos){
  if(localStorage.getItem('favoritos') === null){
    // if(localStorage.getItem('favoritos') === null || localStorage.getItem('favoritos').length == 2){
    document.querySelector('#pets_fav').innerHTML = ""
    document.querySelector('#pets_fav').innerHTML += `
    <div>
      <div class="alert alert-warning" role="alert">
        No hay mascotas agregadas a <strong>Favoritos</strong>
      </div>
    </div>
    `
  }else {
    document.querySelector('#pets_fav').innerHTML = ""
    favoritos.forEach((fav, i) => {
      document.querySelector('#pets_fav').innerHTML += `
      <div class="col-md-6 pet_cont">
        <div class="pet-card">
          <img src="${fav.img}"
          class="img img-responsive">
          <div class="pet-name">${fav.nombre}</div>
          <div class="pet-race">${fav.raza}</div>
        </div>
      </div>
      `
    })
  }
}

window.addEventListener('load', e => {
  llenarArreglo()
  pintarTabla(favs)
})
