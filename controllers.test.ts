import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contactCollection = new ContactsCollection();
  contactCollection.load();
  const controller = new ContactsController();
  t.deepEqual(controller.contacts, contactCollection);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = 2;
  t.deepEqual(controller.processOptions(options), { id: 2, name: "Paula" });
  options.params = undefined;
  t.deepEqual(controller.processOptions(options), controller.contacts.getAll());
  options.action = "save";
  options.params = { id: 111, name: "pedro" };
  const mockObject = { id: 111, name: "pedro" };
  controller.processOptions(options);
  t.deepEqual(controller.contacts.getOneById(111), mockObject);
});
