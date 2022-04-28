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
  const datos = prueba.processOptions({ action: "get", params: { id: 1 } });
  const contactos = prueba.processOptions({ action: "get", params: {} });
  const guardar = prueba.processOptions({
    action: "save",
    params: { id: 15, name: "Jazmín" },
  });
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent[0], datos);
  t.deepEqual(fileContent, contactos);
  t.deepEqual(prueba.contacts.save(), guardar);
});
