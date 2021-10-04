import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const modelC = new ContactsController();
  const modelM = new ContactsCollection();
  modelM.load();
  t.deepEqual(modelM, modelC.contacts);
});

test("Testeo el método processOptions", (t) => {
  const prueba = new ContactsController();
  const pruebaPO = new ContactsControllerOptions();
  let idABuscar = 2;
  pruebaPO.action = "get";
  pruebaPO.params = idABuscar;

  const a = prueba.contacts.getOneById(idABuscar);
  const b = prueba.processOptions(pruebaPO);
  t.deepEqual(a, b);

  idABuscar = 8;
  const c = prueba.contacts.getAll();
  const d = prueba.processOptions(pruebaPO);
  t.deepEqual(a, b);
});
