const admin = require('firebase-admin');

const serviceAccount = require('./DB/ejerciciofirebase-5778c-firebase-adminsdk-81nef-ec89c4f642.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ejerciciofirebase-5778c-default-rtdb.firebaseio.com',
});

console.log('Firebase conectada');

CRUD();

async function CRUD() {
  const db = admin.firestore();
  const query = db.collection('usuarios');

  try {
    /*const id = 3;
    const doc = query.doc();
    await doc.create({ nombre: 'Carla', dni: 4444 });*/
    const queryTodos = await query.get();
    const response = queryTodos.docs.map((doc) => ({
      id: doc.id,
      nombre: doc.data().nombre,
      dni: doc.data().dni,
    }));
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
