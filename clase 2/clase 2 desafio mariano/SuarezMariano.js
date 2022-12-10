class Usuario {
  constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    console.log(`Nombre de Usuario: ${this.nombre} ${this.apellido}`);
  }

  addMascota(nombre) {
    this.mascotas.push(nombre);
  }

  countMascota() {
    console.log(`Mascotas: ${this.mascotas.length}`);
  }

  getBookNames() {
    console.log(`Libros: ${this.libros.map((libro) => libro.titulo)}`);
  }

  addBook(titulo, autor) {
    this.libros.push({ titulo, autor });
  }
}

const Mariano = new Usuario('Mariano', 'Suarez');

Mariano.addMascota('Miley');
Mariano.addMascota('Maggie');
Mariano.addBook('El tunel', 'Ernesto Sabato');
Mariano.addBook('Rayuela', 'Cortazar');

Mariano.getFullName();
Mariano.getBookNames();
Mariano.countMascota();
