import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contacts = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(controller.contacts.getAll(), contacts);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const contacts = jsonfile.readFileSync("./contacts.json");
  const mockOption = new ContactsControllerOptions();
  mockOption.action = "get";
  mockOption.params = false;
  const respuestaMock = controller.processOptions(mockOption);

  t.deepEqual(respuestaMock, contacts);
});
