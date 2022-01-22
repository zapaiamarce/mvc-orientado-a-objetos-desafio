import test from "ava";
import * as jsonfile from "jsonfile";

import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
  const contactsTest = new ContactsController();
  const json = new ContactsCollection();
  json.load();
  t.deepEqual(contactsTest.contacts, json);
});

test("Testeo el método processOptions", (t) => {
  const contactCollection = new ContactsController();
  const idOfModel = new ContactsCollection();
  idOfModel.load();
  const idUser = idOfModel.getOneById(1);
  const elemento = contactCollection.processOptions({
    action: "get",
    params: 1,
  });
  // segunda parte
  const objPersona = { id: 40, name: "gabriel" };
  contactCollection.processOptions({ action: "save", params: objPersona });
  const gabriel = idOfModel.getOneById(40);
  t.deepEqual(elemento, idUser);
  t.deepEqual(gabriel, objPersona);
});
