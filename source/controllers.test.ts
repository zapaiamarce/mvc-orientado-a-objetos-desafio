import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from './controllers';


test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});


test('processOptions - get all contacts', t => {
const controller = new ContactsController();
const result = controller.processOptions  ({ action: "get", params: {} });


t.true(Array.isArray(result)); // Verifica que el resultado sea un array
});


test('processOptions - get contact by id', t => {
const controller = new ContactsController();
const result = controller.processOptions  ({ action: 'get', params: {id: 1 } });


t.truthy(result); // Verifica que se devuelva un contacto
});

test('processOptions - save new contact', t => {
  const controller = new ContactsController();
  const newContact = { id: 2, name: 'Nuevo Contacto' };
  const options: ContactsControllerOptions = { action: 'save', params: newContact };

  const result = controller.processOptions(options);
  
  t.deepEqual(result, newContact); // Verifica que el contacto guardado sea el mismo
});