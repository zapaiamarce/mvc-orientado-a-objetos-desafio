// Importamos la función `test` del framework AVA
import test from "ava";

// Importamos la clase que queremos probar
import { ContactsCollection } from "./models";

// Importamos jsonfile para leer el archivo contacts.json directamente
import * as jsonfile from "jsonfile";

// Primera prueba: testea que el método load() carga correctamente el archivo JSON
test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection(); // Creamos una instancia del modelo
  model.load(); // Cargamos los datos desde contacts.json
  const archivo = jsonfile.readFileSync(__dirname + "/../contacts.json"); // Leemos el archivo manualmente
  t.deepEqual(model.getAll(), archivo); // Verificamos que el modelo contenga lo mismo que el archivo
});

// Segunda prueba: testea que addOne agrega un contacto correctamente
test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection(); // Nueva instancia
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact); // Agregamos un contacto
  t.deepEqual(model.getAll(), [mockContact]); // Verificamos que el array contiene solo ese contacto
});

// Tercera prueba: testea que save guarda correctamente en el archivo JSON
test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection(); // Instancia del modelo
  model.load(); // Cargamos datos actuales
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact); // Agregamos uno nuevo
  model.save(); // Guardamos en el archivo
  const fileContent = jsonfile.readFileSync(__dirname + "/../contacts.json"); // Leemos el archivo
  t.deepEqual(fileContent, model.getAll()); // Verificamos que lo guardado coincide con el contenido interno
});

// Cuarta prueba: testea que getOneById funciona correctamente
test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection(); // Creamos el modelo
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact); // Agregamos un contacto
  const one = model.getOneById(31); // Lo buscamos por ID
  t.deepEqual(one, mockContact); // Verificamos que sea el mismo
});
