import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contact = new ContactsController();
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(contact.contacts, model);
});

test("Testeo el método processOptions", (t) => {
  const contact = new ContactsController();
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = 30;
  let prueba = contact.processOptions(options);
  const model = new ContactsCollection();
  model.load();
    t.deepEqual(model.getOneById(30), prueba);
    options.action = "get";
    options.params = null;
    prueba = contact.processOptions(options);
    t.deepEqual(model.getAll(), prueba);
    options.action = "save";
    options.params = { id: 40, name: "Ruben" };
    prueba = contact.processOptions(options);
    t.deepEqual(model.addOne(options.params), prueba);
});
