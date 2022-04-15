import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const collection = new ContactsCollection();
  collection.load();
  t.deepEqual(controller.contacts.data, collection.data);
});

test("Testeo el método processOptions", (t) => {
  const controlleropt = new ContactsControllerOptions();
  controlleropt.action = "get";
  controlleropt.params = { name: "ana" };
  const controller = new ContactsController();
  const resultado = controller.processOptions(controlleropt);
  const collection = new ContactsCollection();
  collection.load();
  const resultado1 = collection.getAll();
  t.deepEqual(resultado, resultado1);
});
