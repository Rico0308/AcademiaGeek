function filtrado_categoria () {
  //Agregar Clase Active a perros
  document.querySelector(".pet_category[category='Perro']").classList.add('btn_categoria_active');

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

}
