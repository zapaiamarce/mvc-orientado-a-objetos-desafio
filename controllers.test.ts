import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

// test("Testeo el constructor del controller", (t) => {});

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(contactos, controller.contacts.data);
});

// test("Testeo el método processOptions", (t) => {});

// that's all folks!
