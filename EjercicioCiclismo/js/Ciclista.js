class Ciclista{
  constructor(){
    this.nombre
    this.registroTiempos = {
      carrera1: 0,
      carrera2: 0,
      carrera3: 0,
      carrera4: 0,
      carrera5: 0
    }
  }

  promedioTiempo(){
    const {
      carrera1,
      carrera2,
      carrera3,
      carrera4,
      carrera5
    } = this.registroTiempos
    return (carrera1 + carrera2 + carrera3 + carrera4 + carrera5) / 5
  }

  registrarTiempo(carrera, tiempo){
    this.registroTiempos[carrera] = tiempo
  }
}

export default Ciclista
