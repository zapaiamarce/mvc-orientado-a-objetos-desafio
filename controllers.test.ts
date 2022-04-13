import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

// test("Testeo el constructor del controller", (t) => {});
test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(controller.contacts.data, laData);
});

// test("Testeo el método processOptions", (t) => {});
