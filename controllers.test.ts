import * as jsonfile from "jsonfile";
import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const contactsTest = new ContactsController();
  const json = new ContactsController();
  // json.load();
  t.deepEqual(contactsTest.contacts, json.contacts);
});

test("Testeo el método processOptions", (t) => {
  const dataOfContactsController = new ContactsController();
  const arrJson = dataOfContactsController.contacts.getAll();
  t.is(
    arrJson,
    dataOfContactsController.processOptions({ action: "get", params: {} })
  );
  t.is(
    arrJson[0],
    dataOfContactsController.processOptions({
      action: "get",
      params: { id: 1 },
    })
  );
  dataOfContactsController.processOptions({
    action: "save",
    params: { id: 10, name: "Chango" },
  });
  const jsonSave = dataOfContactsController.contacts.getAll();
  t.is(jsonSave, dataOfContactsController.contacts.getAll());
});
