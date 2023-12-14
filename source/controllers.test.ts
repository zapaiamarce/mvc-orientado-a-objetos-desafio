import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

let controller: ContactsController;
let contactsCollection: ContactsCollection;

//Se crea una instancia de ContactsController y de ContactsCollection.
//La colección se carga con datos de prueba antes de cada prueba utilizando el hook test.beforeEach.
//Esto asegura que tengamos un estado consistente antes de ejecutar cada prueba.

test.beforeEach((t) => {
  controller = new ContactsController();
  contactsCollection = new ContactsCollection();
  contactsCollection.load();
});

test("Testeo el constructor del controller", (t) => {
  controller = new ContactsController();
  t.truthy(controller instanceof ContactsController);
});

test("Testeo el método processOptions - caso 'get' con id", (t) => {
  //Define el ID existente en tu ContactsCollection
  const idExistente = 1;
  //Define las opciones para la prueba
  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: idExistente },
  };
  // Ejecución de la Prueba:
  // Ejecuta el método processOptions con las opciones definidas.
  // El resultado del método se almacena en la variable result.
  const result = controller.processOptions(options);
  //Se utiliza t.deepEqual para comparar el resultado (result) con el resultado esperado
  //obtenido directamente de la colección mediante contactsCollection.getOneById(existingId)
  t.deepEqual(result, contactsCollection.getOneById(idExistente));
});

test("Testeo el método processOptions - caso 'get' sin id", (t) => {
  const options: ContactsControllerOptions = {
    action: "get",
    params: {},
  };
  const result = controller.processOptions(options);
  const contactos = contactsCollection.getAll();
  t.deepEqual(result, contactos);
});

test("Testeo el método processOptions - caso 'save'", (t) => {
  const options: ContactsControllerOptions = {
    action: "save",
    params: { id: Number, name: String },
  };
  const result = controller.processOptions(options);
  const contacto = contactsCollection.save();
  t.deepEqual(result, contacto);
});
