import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const ahoraSi = new ContactsController();
  ahoraSi.contacts.getAll();
  t.truthy(ahoraSi);
});

test("Testeo de processOptions", (t) => {
  const model = new ContactsController();
  const modelFile = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(modelFile, model.contacts.getAll());

  const testDos = { name: "Ivan" };
  const contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
  const result = model.processOptions({ action: "get", params: testDos });
  t.deepEqual(result, contactos);
});
