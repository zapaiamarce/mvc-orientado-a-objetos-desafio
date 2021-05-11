import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const prueba = controller.contacts;
  const collection = new ContactsCollection();
  collection.load();
  const contacts = collection.data;

  t.deepEqual(prueba.data, contacts);
});

test("Testeo el método processOptions", (t) => {
  const controllerOptions = new ContactsControllerOptions();
  controllerOptions.action = "get";
  controllerOptions.params = { id: 1 };

  const contactsController = new ContactsController();
  const process = contactsController.processOptions(controllerOptions);

  const contactsCollection = new ContactsCollection();
  contactsCollection.load();
  const contacts = contactsCollection.getOneById(1);

  t.deepEqual(process, contacts);
});
