import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const instanciaController = new ContactsController();
  const pruebaConstructor = instanciaController.contacts;

  const instanciaCollection = new ContactsCollection();
  instanciaCollection.load();
  const contacts = instanciaCollection.data;

  t.deepEqual(pruebaConstructor.data, contacts);
});

test("Testeo el método processOptions - get", (t) => {
  const instanaciaControllerOptions = new ContactsControllerOptions();
  instanaciaControllerOptions.action = "get";
  instanaciaControllerOptions.params = { id: 4 };

  const instanciaController = new ContactsController();
  const pruebaProcess = instanciaController.processOptions(
    instanaciaControllerOptions
  );

  const instanciaCollection = new ContactsCollection();
  instanciaCollection.load();
  const contacts = instanciaCollection.getOneById(4);

  t.deepEqual(pruebaProcess, contacts);
});
