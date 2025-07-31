// import test from "ava";
// import { ContactsController } from "./controllers";
// import { ContactsCollection } from "./models";
// import { Contact } from "./models";

// test("Testeo el constructor del controller", (t) => {
//   // test de ejemplo
//   t.truthy(true);
// });
// function isContact(obj: any): obj is Contact {
//   return obj && typeof obj === 'object' && 'id' in obj;
// }

// test("Testeo el método processOptions get all contacts", (t) => {
//   const controller = new ContactsController();
//   controller.contactsCollection.load(); // Asegurate que carga data de prueba

//   const result = controller.processOptions({ action: 'get', params: {} });
//   t.true(Array.isArray(result));
// });
// test('processOptions get one contact by id', t => {
//   const controller = new ContactsController();
//   controller.contactsCollection.load();

//   const contact = controller.processOptions({ action: 'get', params: { id: 1 } });
//   t.truthy(contact); // Verifica que no sea undefined
//   if (contact && typeof contact !== 'string' && !Array.isArray(contact)) { // Verifica que sea un objeto
//     t.is(contact.id, 1);
//   }
// });

// test('processOptions save new contact', t => {
//   const controller = new ContactsController();
//   controller.contactsCollection.load();

//   const newContact = { id: 99, name: 'Test' };
//   const result = controller.processOptions({ action: 'save', params: newContact });
//   t.deepEqual(result, { message: 'Contacto guardado' });

//   const savedContact = controller.processOptions({ action: 'get', params: { id: 99 } });
//   t.truthy(savedContact); // Verifica que no sea undefined
//   if (savedContact && typeof savedContact !== 'string' && !Array.isArray(savedContact)) { // Verifica que sea un objeto
//     t.is(savedContact.id, 99);
//   }

import test from 'ava';
import { ContactsController } from './controllers';
import { Contact } from './models'; // Asegúrate de importar el tipo Contact

// Type guard para verificar si es un Contact
function isContact(obj: any): obj is Contact {
  return obj && typeof obj === 'object' && 'id' in obj;
}

test('get one contact by id', t => {
  const controller = new ContactsController();
  controller.contactsCollection.load();

  const contact = controller.processOptions({ action: 'get', params: { id: 1 } });
  t.truthy(contact); // Verifica que no sea undefined
  if (isContact(contact)) { // Solo accede a id si contact es un objeto Contact
    t.is(contact.id, 1);
  }
});

test('save new contact', t => {
  const controller = new ContactsController();
  controller.contactsCollection.load();

  const newContact = { id: 99, name: 'Test' };
  const result = controller.processOptions({ action: 'save', params: newContact });
  t.deepEqual(result, { message: 'Contacto guardado' });

  const savedContact = controller.processOptions({ action: 'get', params: { id: 99 } });
  t.truthy(savedContact); // Verifica que no sea undefined
  if (isContact(savedContact)) { // Solo accede a id si savedContact es un objeto Contact
    t.is(savedContact.id, 99);
  }
});

