import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  t.deepEqual(contactsObject, model.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const modelDos = new ContactsController();
  let optionGet = new ContactsControllerOptions();
  optionGet = {
    action: "get",
    params: 1,
  };
  const idEncontrado = modelDos.processOptions(optionGet);
  t.deepEqual(modelDos.contacts.getOneById(1), idEncontrado);

  let optionGetDos = new ContactsControllerOptions();
  optionGetDos = {
    action: "save",
    params: {
      id: 10,
      nombre: "alan",
    },
  };
  const idAgregado = modelDos.processOptions(optionGetDos);
  optionGetDos = {
    action: "get",
    params: 10,
  };
  const idEncontradoDos = modelDos.processOptions(optionGetDos);
  t.deepEqual(modelDos.contacts.getOneById(10), idEncontradoDos);

  let optionGetTres = new ContactsControllerOptions();
  optionGetTres = {
    action: "get",
    params: 15,
  };
  const idNoEncontrado = modelDos.processOptions(optionGetTres);
  t.deepEqual(modelDos.contacts.getAll(), idNoEncontrado);
});
