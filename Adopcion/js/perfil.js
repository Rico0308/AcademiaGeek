class Perfil{
  constructor(){
    this.img,
    this.nombres,
    this.apellidos,
    this.correo
  }
}


window.addEventListener('load', e => {
  if(localStorage.getItem('perfil')){
    perfil = JSON.parse(localStorage.getItem('perfil'))
    document.querySelector('#usuario_perfil').innerHTML = ""
    perfil.forEach((perf, i) => {
      document.querySelector('#usuario_perfil').innerHTML += `
      <a href="pets.html" role="button"><i class="bi fa-2x bi-arrow-left-circle-fill button_a"></i></a>
      <img src="../img/perfil.png" alt="Foto Perfil" class="img img-responsive img_perfil mt-3">
      <h4>${perf.nombres} ${perf.apellidos}</h4>
      <h6>Editar Cuenta</h6>
      <div class="form-group me-3 ms-3 mb-3 label-left">
        <label for="name" align="center">Nombres</label>
        <input type="text" class="form-control" id="name" value="${perf.nombres}" placeholder="Ingrese el Nombre" required>
      </div>
      <div class="form-group me-3 ms-3 mb-3 label-left">
        <label for="last-name">Apellidos</label>
        <input type="text" class="form-control" id="last-name" value="${perf.apellidos}" placeholder="Ingrese el Apellido" required>
      </div>
      <div class="form-group me-3 ms-3 label-left">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" value="${perf.correo}" aria-describedby="emailHelp" placeholder="Enter email" required>
      </div>
      <button type="submit" class="btn mt-2">Guardar</button>
      `
    })
  }else{
    document.querySelector('#usuario_perfil').innerHTML = ""
    document.querySelector('#usuario_perfil').innerHTML += `
    <img src="../img/perfil.png" alt="Foto Perfil" class="img img-responsive img_perfil mt-3">
    <h4>Nombre</h4>
    <h6>Editar Cuenta</h6>
    <div class="form-group me-3 ms-3 mb-3 label-left">
      <label for="name" align="center">Nombres</label>
      <input type="text" class="form-control" id="name" placeholder="Ingrese el Nombre" required>
    </div>
    <div class="form-group me-3 ms-3 mb-3 label-left">
      <label for="last-name">Apellidos</label>
      <input type="text" class="form-control" id="last-name" placeholder="Ingrese el Apellido" required>
    </div>
    <div class="form-group me-3 ms-3 label-left">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
    </div>
    <button type="submit" class="btn mt-2">Guardar</button>
    `
  }
})


document.querySelector("#usuario_perfil").addEventListener('submit', e => {
  let perfil = new Perfil();
  let arra_perfil = [];
  perfil.img = "../img/user.jpg";
  perfil.nombres = document.querySelector("#name").value;
  perfil.apellidos = document.querySelector("#last-name").value;
  perfil.correo = document.querySelector("#email").value;
  arra_perfil.push(perfil);
  localStorage.setItem('perfil', JSON.stringify(arra_perfil))
  alert("La próxima vez que vueltas a Perfil tendrás los datos actualizados");
  e.preventDefault();
})
