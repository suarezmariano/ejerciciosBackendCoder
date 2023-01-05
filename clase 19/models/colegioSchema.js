const mongoose = require('mongoose');

const estudiantesSchema = new mongoose.Schema({
  nombre: { type: String, require: true, max: 100 },
  apellido: { type: String, require: true, max: 100 },
  curso: { type: String, require: true, max: 100 },
  dni: { type: String, require: true, max: 8 },
  nota: { type: Number, require: true },
  edad: { type: Number, require: true },
});

module.exports = mongoose.model('estudiantes', estudiantesSchema);
