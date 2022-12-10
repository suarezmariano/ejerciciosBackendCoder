  //Funcion mostrar lista
  function mostrarLista (miLista) {
   if (miLista.length === 0)
     console.log('Lista Vacia')
   else 
     console.log(miLista)
 }

 mostrarLista([5, 9, 8]) 
// Funcion Anonima que muestra lista 
 (function (miLista) {
   if (miLista.length === 0) console.log("Lista Vacia")
   else console.log(miLista)
 })([3,2,4])


//Numero 3

 function crearMultiplicador (a) {
    return (function (){
       console.log( a * b)
    })()
}

crearMultiplicador(5) 

//Ejemplo Closure
let miCalculadora = function (a) {
    
    function duplicar () {
        console.log(a * 2)
    }

    function triplicar () {
        console.log(a * 3)
    }

    function multiplicador(b) {
        console.log(a * b)
    }

    return {duplicar, triplicar, multiplicador}
}

miCalculadora(4).multiplicador(5)