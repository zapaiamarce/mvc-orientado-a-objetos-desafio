import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const contactsController = new ContactsController();
  t.deepEqual(contactsObject, contactsController.contacts.getAll());
  t.truthy(contactsController, typeof ContactsController);
  t.truthy(contactsController.contacts, typeof ContactsCollection);
});

test("Testeo el método processOptions", (t) => {
  const contactsController = new ContactsController();

  //PRUEBAS CON MOCK ACTION : GET
  const processMockGET: ContactsControllerOptions = {
    action: "get",
    params: 50,
  };

  t.is(processMockGET.action, "get");
  t.deepEqual(
    contactsController.processOptions(processMockGET),
    contactsController.contacts.getAll()
  );
  t.truthy(processMockGET, typeof ContactsControllerOptions);

  //PRUEBAS CON MOCK ACTION : SAVE
  const processMockSAVE: ContactsControllerOptions = {
    action: "save",
    params: {
      id: 5,
      name: "Mock Prueba SAVE",
    },
  };

  t.is(processMockSAVE.action, "save");
  t.deepEqual(contactsController.contacts.arrayDeDatos.length, 4);
  t.truthy(processMockSAVE, typeof ContactsControllerOptions);
});
