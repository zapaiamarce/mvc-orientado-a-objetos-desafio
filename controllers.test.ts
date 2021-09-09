import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contacts = new ContactsCollection();
  contacts.load();
  t.deepEqual(controller.contacts.data, contacts.data);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = { id: 31 };
  const one = controller.processOptions(options);
  const contacts = new ContactsCollection();
  const two = contacts.getOneById(1);
  t.deepEqual(one, two);
});
