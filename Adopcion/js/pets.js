document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector(".pet").classList.add("slide_bottom_entrada");
  document.querySelector('#pets').innerHTML = ""

  mascotas.forEach((mascota, i) => {
    document.querySelector('#pets').innerHTML += `
    <div class="col-md-6 pet_cont" category="${mascota.categoria}">
      <div class="pet-card">
        <a href="pet_detail.html?id=${i}">
          <img src="${mascota.img}"
          class="img img-responsive">
          <div class="pet-name">${mascota.nombre}</div>
          <div class="pet-race">${mascota.raza}</div>
        </a>
      </div>
    </div>
    `
  })

  //Agregar Clase Active a perros
  // document.querySelector(".pet_category[category='Perro']").classList.add('btn_categoria_active');

  $('.pet_category').click(function () {
    var cat_pet = $(this).attr('category');

    //Agregar Clase a la Categoria Seleccionada
    $('.pet_category').removeClass('btn_categoria_active');
    $(this).addClass('btn_categoria_active');

    //Ocultando Mascotas
    $('.pet_cont').addClass('slide_bottom_entrada');
    $('.pet_cont').hide();

    //Mostrando Mascotas
    $('.pet_cont[category="'+cat_pet+'"]').show();
  });
});
