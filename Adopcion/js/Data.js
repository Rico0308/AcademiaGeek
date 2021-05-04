let mascotas = []
let mensajes = []
let favoritos = []

mascotas = [
  {
    categoria: "Perro",
    nombre: "Tony",
    img: "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
    edad: "2 Años",
    raza: "Husky",
    direccion: "6352 Kunde Keys Suite 566 - Rio Rancho, ID / 10326",
    historia: "Tony es un perro muy tierno y juguetón, le encantan los niños, es educado, fue rescatado de la calle, la misión es encontrarle una familia que lo quiera.",
    sexo: "Macho",
    img_sexo: "./img/male.png",
    personalidad: {
      primera: "Tierno",
      img_1: "./img/tierno.png",
      segunda: "Juguetón",
      img_2: "./img/jugueton.png",
      tercera: "Inquieto",
      img_3: "./img/inquieto.png"
    },
    persona_cargo: "Juan Perez"
  },
  {
    categoria: "Perro",
    nombre: "Loky",
    img: "https://images.pexels.com/photos/4052809/pexels-photo-4052809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "3 Años",
    raza: "Pitbull",
    direccion: "67670 Bins Trail Apt. 331 - Oshkosh, NC / 81783",
    historia: "Se da en adopción Loky por temas normativos del lugar donde resido, me duele mucho separarme de él, sin embargo no me dejan tenerlo acá. Es muy juguetón y tierno, obediente y con mucha energía.",
    sexo: "Macho",
    img_sexo: "/Adopcion/img/male.png",
    personalidad: {
      primera: "Juguetón",
      img_1: "/Adopcion/img/jugueton.png",
      segunda: "Inquieto",
      img_2: "/Adopcion/img/inquieto.png",
      tercera: "Tierno",
      img_3: "/Adopcion/img/tierno.png"
    },
    persona_cargo: "Paola Martinez"
  },
  {
    categoria: "Perro",
    nombre: "Pelusa",
    img: "https://images.pexels.com/photos/5490667/pexels-photo-5490667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "4 Meses",
    raza: "Bichón Frisé",
    direccion: "94315 Marcel Throughway Apt. 046 - Springdale, WA / 69356",
    historia: "Pelusa es muy jueguetona además de cariñosa y muy mimada, sin embargo se está buscando un hogar ya que mi otra mascota no está acostumbrada a convivir con otros animales.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Cariñoso",
      img_1: "/Adopcion/img/cariñoso.png",
      segunda: "Tierno",
      img_2: "/Adopcion/img/tierno.png",
      tercera: "Juguetón",
      img_3: "/Adopcion/img/jugueton.png"
    },
    persona_cargo: "Laura Ortiz"
  },
  {
    categoria: "Perro",
    nombre: "Pacho",
    img: "https://images.pexels.com/photos/7325457/pexels-photo-7325457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "6 Meses",
    raza: "Pug",
    direccion: "717 Gerlach Way Suite 076 - Providence, NM / 82207",
    historia: "Pacho es un perro muy jugueton que desea ser adoptado, le gustan mucho los niños.",
    sexo: "Macho",
    img_sexo: "/Adopcion/img/male.png",
    personalidad: {
      primera: "Juguetón",
      img_1: "/Adopcion/img/jugueton.png",
      segunda: "Cariñoso",
      img_2: "/Adopcion/img/cariñoso.png",
      tercera: "Inquieto",
      img_3: "/Adopcion/img/inquieto.png"
    },
    persona_cargo: "Leidy Barrientos"
  },
  {
    categoria: "Perro",
    nombre: "Ramona",
    img: "https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "7 Meses",
    raza: "Chihuahua",
    direccion: "449 Fanny Hills Suite 584 - Muskogee, FL / 96165",
    historia: "Se da en adopción Ramona, es una perrita muy juguetona con gran energía, actualmente se encontraba en un hogar de paso para perros.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Tierno",
      img_1: "/Adopcion/img/tierno.png",
      segunda: "Juguetón",
      img_2: "/Adopcion/img/jugueton.png",
      tercera: "Inquieto",
      img_3: "/Adopcion/img/inquieto.png"
    },
    persona_cargo: "Patricia Mora"
  },
  {
    categoria: "Perro",
    nombre: "Bob",
    img: "https://images.pexels.com/photos/5214405/pexels-photo-5214405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "4 Meses",
    raza: "Pitbull",
    direccion: "282 Hamill Ville Suite 490 - Lexington-Fayette, OR / 15160",
    historia: "Bob es uno de los 6 perros que tuvo su madre Canela, se da en adopción ya que son muchos los perros que tengo a mi cargo y es dificil mantenerlos a todos. Es super tierno y cariñoso, buscando alguien que le de amor y atención.",
    sexo: "Macho",
    img_sexo: "/Adopcion/img/male.png",
    personalidad: {
      primera: "Cariñoso",
      img_1: "/Adopcion/img/cariñoso.png",
      segunda: "Tierno",
      img_2: "/Adopcion/img/tierno.png",
      tercera: "Juguetón",
      img_3: "/Adopcion/img/jugueton.png"
    },
    persona_cargo: "Camila Sanchez"
  },
  {
    categoria: "Gato",
    nombre: "Pelusin",
    img: "https://images.pexels.com/photos/5501945/pexels-photo-5501945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "3 Meses",
    raza: "Gato Americano",
    direccion: "180 Domingo Inlet Apt. 605 - Honolulu, PA / 13994",
    historia: "Pelusin es una gata Americana de 3 meses, hace 2 meses fue encontrada en una tarde lluviosa vagando por la calle, desde entonces ha sido cuidado por mi, deseo encontrarle un hogar, es muy apegada y tierna.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Tierno",
      img_1: "/Adopcion/img/tierno.png",
      segunda: "Inquieto",
      img_2: "/Adopcion/img/inquieto.png",
      tercera: "Juguetón",
      img_3: "/Adopcion/img/jugueton.png"
    },
    persona_cargo: "Juan Gomez"
  },
  {
    categoria: "Gato",
    nombre: "Copito",
    img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "2 Meses",
    raza: "Gato Americano",
    direccion: "93813 Frederic Gateway Suite 473 - Federal Way, MT / 70407",
    historia: "Copito es un gato rescatado de las calles, fue abandonado cuando tenía 1 mes de nacido, le encanta que lo mimen y le gusta jugar mucho con su peluche favorito.",
    sexo: "Macho",
    img_sexo: "/Adopcion/img/male.png",
    personalidad: {
      primera: "Cariñoso",
      img_1: "/Adopcion/img/cariñoso.png",
      segunda: "Tierno",
      img_2: "/Adopcion/img/tierno.png",
      tercera: "Juguetón",
      img_3: "/Adopcion/img/jugueton.png"
    },
    persona_cargo: "Gabriel Vera"
  },
  {
    categoria: "Gato",
    nombre: "Canelita",
    img: "https://images.pexels.com/photos/6860906/pexels-photo-6860906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "1 Año",
    raza: "Gato Persa",
    direccion: "5590 Jimmy Keys Apt. 120 - Gulfport, TN / 44796",
    historia: "Coco es una gata persa, que a pesar de su apariencia le encanta que lo consientan, le gusta jugar y no se queda quieto, se da en adopción ya que no me es permitido tenerlo en mi nuevo lugar de residencia.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Juguetón",
      img_1: "/Adopcion/img/jugueton.png",
      segunda: "Cariñoso",
      img_2: "/Adopcion/img/cariñoso.png",
      tercera: "Inquieto",
      img_3: "/Adopcion/img/inquieto.png"
    },
    persona_cargo: "Guillermo Cordoba"
  },
  {
    categoria: "Gato",
    nombre: "Bigotes",
    img: "https://images.pexels.com/photos/7317523/pexels-photo-7317523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "1 Año",
    raza: "Gato Americano",
    direccion: "335 Rogers Avenue Suite 736 - Pinellas Park, IN / 45738",
    historia: "Bigotes ha sido el nombre que se le dio a este gato Americano el cual llegó a mi casa, no encontramos el dueño y queremos buscarle un buen hogar, es muy jueguetón e inquieto pero ante todo muy educado.",
    sexo: "Macho",
    img_sexo: "/Adopcion/img/male.png",
    personalidad: {
      primera: "Tierno",
      img_1: "/Adopcion/img/tierno.png",
      segunda: "Juguetón",
      img_2: "/Adopcion/img/jugueton.png",
      tercera: "Inquieto",
      img_3: "/Adopcion/img/inquieto.png"
    },
    persona_cargo: "Marcela Gamboa"
  },
  {
    categoria: "Gato",
    nombre: "Fifi",
    img: "https://images.pexels.com/photos/3772262/pexels-photo-3772262.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    edad: "4 Meses",
    raza: "Gato Americano",
    direccion: "7907 Klocko Mountain Suite 139 - Franklin, WA / 11400",
    historia: "Fifi es una gata que fue rescatada, la encontramos en una caja de cartón, ya contamos con 3 gatos y 2 perros, nos es dificil mantener uno mas, deseamos encontrar prontamente un hogar, es muy cariñoso y apegado.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Cariñoso",
      img_1: "/Adopcion/img/cariñoso.png",
      segunda: "Tierno",
      img_2: "/Adopcion/img/tierno.png",
      tercera: "Juguetón",
      img_3: "/Adopcion/img/jugueton.png"
    },
    persona_cargo: "Vanessa Rangel"
  },
  {
    categoria: "Gato",
    nombre: "Lucy",
    img: "https://images.pexels.com/photos/4588452/pexels-photo-4588452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    edad: "1 Año",
    raza: "Peterbald",
    direccion: "6302 Octavia Spring Suite 469 - Muskegon, WA / 12600",
    historia: "Lucy es una gata que empezó a frecuentar la cuadra por donde vivo, empezamos a alimentarla y no se ha encontrado dueño, deseamos que alguien le pueda dar un hogar y cuidar de ella.",
    sexo: "Hembra",
    img_sexo: "/Adopcion/img/female.png",
    personalidad: {
      primera: "Juguetón",
      img_1: "/Adopcion/img/jugueton.png",
      segunda: "Inquieto",
      img_2: "/Adopcion/img/inquieto.png",
      tercera: "Tierno",
      img_3: "/Adopcion/img/tierno.png"
    },
    persona_cargo: "Nancy Sierra"
  }
]

mensajes = [
  {
    img: "./img/avatar1.png",
    nombre: "Josefina Torres",
    hora: "5:00 PM",
    mensaje: "Buenas tardes, me gustaría adoptar al perrito Loky"
  },
  {
    img: "./img/avatar2.png",
    nombre: "Martín Gómez",
    hora: "11:00 AM",
    mensaje: "Buenas días, estoy interesado en adoptar a la gatita Pelusin"
  },
  {
    img: "/Adopcion/img/avatar3.png",
    nombre: "María Martínez",
    hora: "2:00 PM",
    mensaje: "Buenas tardes, estoy muy interesada en adoptar al gatito Copito"
  },
  {
    img: "./img/avatar4.png",
    nombre: "Jonás Pérez",
    hora: "9:00 AM",
    mensaje: "Buenos días, me gustaría adoptar al perrito Bob"
  },
]
