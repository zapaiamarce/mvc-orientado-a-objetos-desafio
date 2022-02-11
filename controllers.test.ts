import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contact = new ContactsCollection();
  contact.load();

  t.deepEqual(contact.getAll(), controller.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const options = new ContactsControllerOptions();
  const params = {
    id: 48,
    name: "name1",
  };
  options.action = "save";
  options.params = params;

  controller.processOptions(options);

  options.action = "get";
  options.params = 48;
  const result = controller.processOptions(options);

  t.deepEqual(result, params);
});
