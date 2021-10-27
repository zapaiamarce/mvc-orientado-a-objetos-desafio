import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const newContactController = new ContactsController();
  const expected = newContactController.contacts.getAll();
  t.deepEqual(expected, contactsObject);
});

test("Testeo el método processOptions", (t) => {
  //testeo si puede devolver un contacto por su id
  const newContactController = new ContactsController();
  const expected = newContactController.processOptions({
    action: "get",
    params: { id: 1 },
  });
  t.deepEqual(expected, newContactController.contacts.getOneById(1));
  //testeo si puede devolver todos los contactos
  const secondExpected = newContactController.processOptions({
    action: "get",
    params: {},
  });
  t.deepEqual(secondExpected, newContactController.contacts.getAll());
  //testeo si puede guardar un contacto nuevo
  const saveUser = newContactController.processOptions({
    action: "save",
    params: { id: 513, name: "pedro" },
  });
  const thirdExpected = newContactController.contacts.getOneById(513);
  t.deepEqual(thirdExpected, { id: 513, name: "pedro" });
});
