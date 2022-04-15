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
test("Testeo el método processOptions getAll()", (t) => {
  const mockOptionsAll = new ContactsControllerOptions();
  mockOptionsAll.action = "get";

  const controller = new ContactsController();
  const processOptionsAll = controller.processOptions(mockOptionsAll);
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(processOptionsAll, laData);
});

test("Testeo el método processOptions getOneById()", (t) => {
  const mockOptionsId = new ContactsControllerOptions();
  mockOptionsId.action = "get";
  mockOptionsId.params = 1;

  const controller = new ContactsController();
  const processOptionsId = controller.processOptions(mockOptionsId);
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(processOptionsId, laData[0]);
});

test("Testeo el método processOptions addOne() y save()", (t) => {
  const mockOptionsSave = new ContactsControllerOptions();
  mockOptionsSave.action = "save";
  mockOptionsSave.params = { id: 33, name: "Jesús" };

  const controller = new ContactsController();
  const processOptionsSave = controller.processOptions(mockOptionsSave);
  const laData = jsonfile.readFileSync("./contacts.json");

  t.deepEqual(laData[laData.length - 1], mockOptionsSave.params);
});
