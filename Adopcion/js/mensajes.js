window.addEventListener('load', e => {
  if(mensajes === null){
    document.querySelector('#msg').innerHTML = ""
    document.querySelector('#msg').innerHTML += `
    <div>
      <div class="alert alert-warning" role="alert">
        No hay <strong>Mensajes</strong> registrados
      </div>
    </div>
    `
  }else {
    document.querySelector('#msg').innerHTML = ""
    mensajes.forEach((msg, i) => {
      document.querySelector('#msg').innerHTML += `
      <div>
        <a href="mensaje_detail.html?id=${i}">
          <div class="container">
            <img src="${msg.img}" alt="Avatar" style="width:100%;">
            <p class="name">${msg.nombre}<span class="time-right">${msg.hora}</span></p>
            <p>${msg.mensaje}</p>
          </div>
        </a>
      </div>
      `
    })
  }
})
