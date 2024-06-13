import test from "ava";
import { ContactsController} from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contactosLista = new ContactsCollection();
  const testController = new ContactsController(contactosLista);
  t.truthy(testController.contacts.getAll().length > 0);
});

test("Testeo el método processOptions con action 'get' y params no null", (t) => {
  const contactosLista = new ContactsCollection();
  const testController = new ContactsController(contactosLista);

  const newContact = {
    "id": 400,
    "name": "Nuevo Contacto"
  }
  const options = { action: "get" as "get", params: newContact};
  const result = testController.processOptions(options);

  t.deepEqual(result, contactosLista.getOneById(400));
});

test("Testeo el método processOptions con action 'save' y params siendo un nuevo contacto", (t) => {
  const contactosLista = new ContactsCollection();
  const testController = new ContactsController(contactosLista);

  const newContact = {id:1234, name:"Nuevo Contacto"};
  const options = { action: "save" as "save", params:newContact};
  testController.processOptions(options);

  t.deepEqual(testController.contacts.getOneById(1234), newContact);
});

test("Testeo el metodo proceso con action Null ", (t) => {
  const contactoLista = new ContactsCollection();
  const testController = new ContactsController(contactoLista);

  const newContact = {
    "id": 400,
    "name": "Nuevo Contacto"
  }
  const options = { action: null, params: newContact};
  const result = testController.processOptions(options);

    t.deepEqual(result, undefined);
})