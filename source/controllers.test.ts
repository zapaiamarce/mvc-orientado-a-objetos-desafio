import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const newContactsController = new ContactsController();
  t.true(newContactsController.contacts instanceof ContactsCollection);
});

test("Testeo el método processOptions - obtener contacto por ID", (t) => {
  const controller = new ContactsController();
  const contact = controller.processOptions({
    action: "get",
    params: { id: 1 },
  });
  t.truthy(contact);
});

test("Testeo el método processOptions - obtener todos los contactos", (t) => {
  const controller = new ContactsController();
  const allContacts = controller.processOptions({
    action: "get",
    params: null,
  });
  t.true(Array.isArray(allContacts));
});

test("Testeo el método processOptions - guardar un nuevo contacto", (t) => {
  const controller = new ContactsController();
  const newContact = { id: 2, name: "Nuevo Contacto" };

  const saveMessage = controller.processOptions({
    action: "save",
    params: newContact,
  });

  t.is(saveMessage, "Contacto guardado");
});
