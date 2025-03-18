import test from "ava";
import { ContactsController } from "./controllers";
import { Contact } from "./models";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  // Definimos las opciones para la acción 'get'
  const options = {
    action: "get",
    params: {} // No se necesita un id para obtener todos
  };

  const result = controller.processOptions(options);
  
  // Verificamos que el resultado sea un array y tenga la longitud esperada
  t.true(Array.isArray(result));
  t.is(result.length, 4); // Suponiendo que hay 4 contactos en contacts.json

  // Ahora probamos la acción 'save'
  const newContact: Contact = { id: 5, name: "Lucas" };
  const saveOptions = {
    action: "save",
    params: newContact
  };

  controller.processOptions(saveOptions);

  // Verificamos que el nuevo contacto se haya agregado
  const allContacts = controller.processOptions({ action: "get", params: {} });
  t.is(allContacts.length, 5); // Ahora debería haber 5 contactos
  t.deepEqual(allContacts[4], newContact); // Verificamos que el último contacto sea el que agregamos
});





