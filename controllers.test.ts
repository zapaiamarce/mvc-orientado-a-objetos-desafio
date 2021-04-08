import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contactController = new ContactsController();
  contactController.contacts.load();
  const mock = contactController.contacts.getOneById(3);
  t.deepEqual(mock.name, "Mer");
});

test("Testeo el método processOptions", (t) => {
  const contactController = new ContactsController();
  contactController.contacts.load();

  let options = new ContactsControllerOptions();
  options.action = "get";
  options.params = 2;

  const contacto = contactController.processOptions(options);
  t.deepEqual(contacto.name, "Paula");
});
