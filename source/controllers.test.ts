import test from "ava";
import jsonfile from "jsonfile";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";

test("Testeo el método processOptions: load", (t) => {
  const controller = new ContactsController();
  controller.contacts.load();
  t.true(controller.contacts.getAll().length > 0);
});

test("Testeo el método processOptions: get total", (t) => {
  const controller = new ContactsController();
  const opcion: ContactsControllerOptions = { action: "get", params: null };
  const data = controller.processOptions(opcion);
  const original = controller.contacts.getAll();
  t.deepEqual(data, original);
});

test("Testeo el método processOptions: get por id", (t) => {
  const controller = new ContactsController();
  const opcion: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  const data = controller.processOptions(opcion);
  const original = controller.contacts.getOneById(opcion.params.id);
  t.deepEqual(data, original);
});

test("Testeo el método processOptions: save", (t) => {
  const controller = new ContactsController();
  controller.contacts.load();
  const contactoNuevo = { id: 10, name: "Gabriel" };
  const opcion: ContactsControllerOptions = {
    action: "save",
    params: contactoNuevo,
  };
  controller.processOptions(opcion);
  const listaContactos = controller.contacts.getAll();
  const contactoEncontrado = listaContactos.find(
    (c) => c.id === contactoNuevo.id
  );
  t.true(contactoEncontrado !== undefined);
});
