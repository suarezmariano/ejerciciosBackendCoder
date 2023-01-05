const mongoose = require('mongoose');
const modelEstudiantes = require('./models/colegioSchema');

CRUD(modelEstudiantes);

async function CRUD() {
  try {
    const URL = 'mongodb://127.0.0.1:27017/colegio';
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database conected');

    /* modelEstudiantes
      .find()
      .sort({ nombre: 1 })
      .then((data) => {
        console.log(data);
      })
  } catch (e) {
    console.log(e);
  }
    modelEstudiantes
      .find()
      .sort({ edad: 1 })
      .limit(1)
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes.find({ curso: '2A' }).then((data) => {
      console.log(data);
    });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes
      .find()
      .sort({ edad: 1 })
      .skip(1)
      .limit(2)
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes
      .aggregate([{ $group: { _id: 'promedio', avg_val: { $avg: '$nota' } } }])
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes
      .updateOne({ nombre: 'Lucas' }, { $set: { dni: 20355875 } })
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes
      .updateMany(
        {},
        { $set: { ingreso: false } },
        {
          //options
          returnNewDocument: true,
          new: true,
          strict: false,
        }
      )
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }

    modelEstudiantes
      .updateMany({ curso: '1A' }, { $set: { ingreso: true } })
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }*/

    modelEstudiantes.deleteMany({ ingreso: true }).then((data) => {
      console.log(data);
    });
  } catch (e) {
    console.log(e);
  }
}
