const moment = require('moment')
let hoy = moment('2022-02-23')
let cumple = moment('1997-03-14')

console.log(`Hoy es ${hoy.format('DD/MMMM/YYYY')}`)
console.log(`naci ${cumple.format('DD/MMMM/YYYY')}`)


console.log(`desde mi nacimiento han pasado la cantidad de ${hoy.diff(cumple, 'years')} años`)
console.log(`desde mi nacimiento han pasado hola que tal ${hoy.diff(cumple, 'days')} dias`)