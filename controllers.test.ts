import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as fs from "fs";

test("Testeo el constructor del controller", (t) => {
  const clase = new ContactsController();
  const archivos = JSON.parse(fs.readFileSync("./contacts.json").toString());

  t.deepEqual(archivos, clase.contacts.data);
});

test("Testeo el método processOptions", (t) => {
  const clase = new ContactsController();
  const opcion = new ContactsControllerOptions();
  opcion.action = "get";
  opcion.params = 2;
  const archivos = JSON.parse(fs.readFileSync("./contacts.json").toString());

  t.deepEqual(clase.processOptions(opcion), archivos);
});
