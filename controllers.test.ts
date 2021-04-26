import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const prueba = new ContactsController();
  prueba.contacts.load();
  const json = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(json, prueba.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const prueba = new ContactsController();
  const mock = new ContactsControllerOptions();
  mock.action = "get";
  mock.params = { id: 1 };
  const ts = { id: 1, name: "Ana" };

  t.deepEqual(prueba.processOptions(mock), ts);
});

test("Testeo el método processOptions 'Save'", (t) => {
  const prueba = new ContactsController();

  const mock = new ContactsControllerOptions();
  mock.action = "save";
  mock.params = { id: 1, name: "lion" };
  prueba.processOptions(mock);
  const json = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(prueba.contacts.getAll(), json);
});
