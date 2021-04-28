import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as fs from "fs";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  const archivo = JSON.parse(
    fs.readFileSync(__dirname + "/contacts.json").toString()
  );
  t.deepEqual(model.contacts.data, archivo);
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const controlador = new ContactsControllerOptions();
  controlador.action = "get";
  const archivo = JSON.parse(
    fs.readFileSync(__dirname + "/contacts.json").toString()
  );
  t.deepEqual(model.processOptions(controlador), archivo);
});
