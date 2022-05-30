import test from "ava";
import * as jsonfile from "jsonfile";

import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
   const prueba = new ContactsController();
  const datos = prueba.contacts.getAll();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, datos);
});


// test("Testeo el método processOptions", (t) => {});
