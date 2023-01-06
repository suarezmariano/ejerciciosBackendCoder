import { normalize, schema, denormalize } from 'normalizr'
import util from 'util'

const empresa = {
  id: '1000',
  nombre: 'Coderhouse',
  gerente: {
    id: '2',
    nombre: 'Pedro',
    apellido: 'Mei',
    DNI: '20442639',
    direccion: 'CABA 457',
    telefono: '1567811544',
  },
  encargado: {
    id: '3',
    nombre: 'Pablo',
    apellido: 'Blanco',
    DNI: '20442640',
    direccion: 'CABA 458',
    telefono: '1567811545',
  },
  empleados: [
    {
      id: '1',
      nombre: 'Nicole',
      apellido: 'Gonzalez',
      DNI: '20442638',
      direccion: 'CABA 456',
      telefono: '1567811543',
    },
    {
      id: '2',
      nombre: 'Pedro',
      apellido: 'Mei',
      DNI: '20442639',
      direccion: 'CABA 457',
      telefono: '1567811544',
    },
    {
      id: '3',
      nombre: 'Pablo',
      apellido: 'Blanco',
      DNI: '20442640',
      direccion: 'CABA 458',
      telefono: '1567811545',
    },
    {
      id: '4',
      nombre: 'Ana',
      apellido: 'Rojo',
      DNI: '20442641',
      direccion: 'CABA 459',
      telefono: '1567811546',
    },
    {
      id: '5',
      nombre: 'Lucia',
      apellido: 'Sorbo',
      DNI: '20442642',
      direccion: 'CABA 460',
      telefono: '1567811547',
    },
    {
      id: '6',
      nombre: 'Jose',
      apellido: 'Pieres',
      DNI: '20442643',
      direccion: 'CABA 461',
      telefono: '1567811548',
    },
    {
      id: '7',
      nombre: 'Maria',
      apellido: 'Lopez',
      DNI: '20442644',
      direccion: 'CABA 462',
      telefono: '1567811549',
    },
  ],
}

const empleado = new schema.Entity('empleado')
const organigrama = new schema.Entity('organigrama', {
  gerente: empleado,
  encargado: empleado,
  empleados: [empleado],
})

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

const orgNormalizado = normalize(empresa, organigrama)
print(orgNormalizado)
/* 

{
    entities: {
      empleado: {
        '1': {
          id: '1',
          nombre: 'Nicole',
          apellido: 'Gonzalez',
          DNI: '20442638',
          direccion: 'CABA 456',
          telefono: '1567811543'
        },
        '2': {
          id: '2',
          nombre: 'Pedro',
          apellido: 'Mei',
          DNI: '20442639',
          direccion: 'CABA 457',
          telefono: '1567811544'
        },
        '3': {
          id: '3',
          nombre: 'Pablo',
          apellido: 'Blanco',
          DNI: '20442640',
          direccion: 'CABA 458',
          telefono: '1567811545'
        },
        '4': {
          id: '4',
          nombre: 'Ana',
          apellido: 'Rojo',
          DNI: '20442641',
          direccion: 'CABA 459',
          telefono: '1567811546'
        },
        '5': {
          id: '5',
          nombre: 'Lucia',
          apellido: 'Sorbo',
          DNI: '20442642',
          direccion: 'CABA 460',
          telefono: '1567811547'
        },
        '6': {
          id: '6',
          nombre: 'Jose',
          apellido: 'Pieres',
          DNI: '20442643',
          direccion: 'CABA 461',
          telefono: '1567811548'
        },
        '7': {
          id: '7',
          nombre: 'Maria',
          apellido: 'Lopez',
          DNI: '20442644',
          direccion: 'CABA 462',
          telefono: '1567811549'
        }
      },
      organigrama: {
        '1000': {
          id: '1000',
          nombre: 'Coderhouse',
          gerente: '2',
          encargado: '3',
          empleados: [
            '1', '2', '3',
            '4', '5', '6',
            '7'
          ]
        }
      }
    },
    result: '1000'
  } */

const orgDesnormalizado = denormalize(
  orgNormalizado.result,
  organigrama,
  orgNormalizado.entities
)
console.log('OBJETO DESNORMALIZADO: ')
print(orgDesnormalizado)
console.log('Longitud original', JSON.stringify(empresa).length)
console.log('Longitud Normalidado', JSON.stringify(orgNormalizado).length)
console.log('Longitud desNormalidado', JSON.stringify(orgDesnormalizado).length)
