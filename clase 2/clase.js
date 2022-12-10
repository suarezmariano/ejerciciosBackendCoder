class Vendedor {
     conVentas = 0
     static ventasGral = 0
     constructor(nombre) {
         this.nombre = nombre
         }
    devolverResponsable(){
     return this.nombre
    }
    
    obtenerCtaIndividual () {
       return this.conVentas
    }

    obtenerCtaGeneral() {
        return Vendedor.ventasGral
    }

    vender() {
        this.conVentas++
        Vendedor.ventasGral++

    }
}

const Juan = new Vendedor('Juan')
const Miguel = new Vendedor('Miguel')
const Marhta = new Vendedor('Martha')

Juan.vender()
Juan.vender()

Marhta.vender()
Marhta.vender()
Marhta.vender()

Miguel.vender()

console.log('Juan Vendio:' + Juan.obtenerCtaIndividual())
console.log('Martha Vendio:' + Marhta.obtenerCtaIndividual())
console.log('Miguel Vendio:' + Miguel.obtenerCtaIndividual())
console.log('Ventas totales:'+ Juan.obtenerCtaGeneral())
