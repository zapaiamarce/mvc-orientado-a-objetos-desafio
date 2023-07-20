import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";
test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const ejemplo = new ContactsController();
  ejemplo.contacts.getOneById(1);

  t.truthy(ejemplo);
});

test("Testeo el método processOptions", (t) => {
  const ejemplo = new ContactsController();
  const ejemploFile = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(ejemploFile, ejemplo.contacts.getAll());

  const ejemploDos = { name: "" };
  const contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
  const result = ejemplo.processOptions({ action: "get", params: ejemploDos });
  t.deepEqual(result, contactos);
});
