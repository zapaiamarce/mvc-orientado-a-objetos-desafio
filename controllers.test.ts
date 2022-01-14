import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contacts = new ContactsCollection();
  const controller = new ContactsController();
  contacts.load();
  t.deepEqual(controller.contacts.datos, contacts.datos);
});

test("Testeo el método processOptions", (t) => {
  const contacts = new ContactsCollection();
  const controller = new ContactsController();
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = { id: 34 };

  const karakas = controller.processOptions(options);
  const mesopotamia = contacts.getOneById(34);

  t.deepEqual(karakas, mesopotamia);
});
