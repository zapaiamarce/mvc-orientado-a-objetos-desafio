import test from "ava";
import * as jsonfile from "jsonfile";

import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const prueba = new ContactsController();
  const datos = prueba.contacts.getAll();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, datos);
});


test("Testeo el método processOptions", (t) => {
  const prueba = new ContactsController();
  const dates = prueba.processOptions({ action: "get", params: { id: 1 } });
  const contact = prueba.processOptions({ action: "get", params: {} });
  const save = prueba.processOptions({
    action: "save",
    params: { id: 13, name: "luchix" },
  });
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent[0], dates);
  t.deepEqual(fileContent, contact);
  t.deepEqual(prueba.contacts.save(), save);
});
