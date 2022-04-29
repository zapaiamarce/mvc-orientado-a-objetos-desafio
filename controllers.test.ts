import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contactos = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(controller.contacts.getAll(), contactos);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const contactos = jsonfile.readFileSync("./contacts.json");
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = false;
  const respuestaMock = controller.processOptions(options);

  t.deepEqual(respuestaMock, contactos);
});