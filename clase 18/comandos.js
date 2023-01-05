db.createCollection('clientes')
db.clientes.insertMany([{nombre:'juan', edad:10},{nombre:'Marcos', edad:50},{ nombre:'Julian', edad:20}])    
db.articulos.insertMany([{nombre: 'regla', precio: 10 , stock: 100},{nombre: 'mochila', precio: 30 , stock: 50},{nombre: 'lapiz', precio: 2, stock: 5000},{nombre: 'cuaderno', precio: 20, stock: 1000}]
db.articulos.estimatedDocumentCount()
db.articulos.countDocuments( {nombre: 'regla'} )


//ejercicio 2
db.clientes.insertMany([{ "nombre" : "Pablo", "edad" : 25 },{ "nombre" : "Juan", "edad" : 22 },{ "nombre" : "Lucia", "edad" : 25 },{ "nombre" : "Juan", "edad" : 29 },{ "nombre" : "Fede", "edad" : 35 }])


db.clientes.find().sort({edad: -1})//2
db.clientes.find().sort({edad: 1}).limit(1) //3
db.clientes.find().sort({edad: 1}).limit(1).skip(1)//4
db.clientes.find({nombre: 'Juan'})//5
db.clientes.find({nombre: 'Juan', edad: 29})//6
db.clientes.find({$and: [{nombre: 'Juan'},{ edad: 29}]})//6
db.clientes.find({$or: [{nombre: 'Juan'},{ nombre: 'Lucia'}]})//7
db.clientes.find({edad: {$gt: 25}})//8
db.clientes.find({edad: {$lte: 25}})//9
db.clientes.find({edad: {$nin: [25]}})//10
db.clientes.find({edad: {$gt: 25, $lt:37}})//11

db.clientes.update({nombre: 'Fede'},{$set: {edad: 36}})//12

db.clientes.updateMany({edad: 25},{$set: {edad: 26}})//13
db.clientes.deleteMany({nombre: 'Juan'})//14


db.createUser({ user: "encargado" , pwd: "qwerty123",  roles: [    { role: "readWrite", db: "empresas" }     ] })
  