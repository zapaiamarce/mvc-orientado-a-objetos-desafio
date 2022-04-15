import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(controller.contacts.data, laData);
});

// test("Testeo el método processOptions", (t) => {});
test("Testeo el método processOptions getAll", (t) => {
  const mockOptions = new ContactsControllerOptions();
  mockOptions.action = "get";

  const controller = new ContactsController();
  const metodoProcessOptions = controller.processOptions(mockOptions);
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(metodoProcessOptions, laData);
});

test("Testeo el método processOptions getOneById", (t) => {
  const mockOptions = new ContactsControllerOptions();
  mockOptions.action = "get";
  mockOptions.params = 1;

  const controller = new ContactsController();
  const metodoProcessOptions = controller.processOptions(mockOptions);
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(metodoProcessOptions, laData[0]);
});

/* test("Testeo el método processOptions addOne y save", (t) => {
  mamma mia! questo è difficile!
  t.deepEqual();
});
 */
