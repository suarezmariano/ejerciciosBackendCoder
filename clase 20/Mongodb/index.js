import mongoose from 'mongoose';
import { modelUsuarios } from './models/modelUsuarios.js';

CRUD();
async function CRUD() {
  try {
    const URL =
      'mongodb+srv://marianosuarez:jimi5572@cluster0.nmodg.mongodb.net/ecommerce?retryWrites=true&w=majority';
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('base de datos conectada');

    await modelUsuarios.create({
      nombre: 'Federico',
      apellido: 'Perez',
      dni: '320118321',
    });

    console.log(await modelUsuarios.find());
    console.log(await modelUsuarios.estimatedDocumentCount());
  } catch (e) {
    console.log(e);
  }
}
