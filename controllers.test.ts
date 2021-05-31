import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const testContacs = new ContactsCollection();
  const laData = testContacs.load();
  const test = new ContactsController();
  t.deepEqual(test.contacts.contactos, laData);
});

test("Testeo el método processOptions 'get' ", (t) => {
  const testContacs = new ContactsCollection();
  const test = new ContactsController();
  const testController = test.processOptions({ action: "get", params: 2 });
  const mockContact = { id: 2, name: "Paula" };
  const testController2 = test.processOptions({ action: "get", params: 8 });
  const mockContact2 = testContacs.load();
  t.deepEqual(testController, mockContact);
  t.deepEqual(testController2, mockContact2);
});

test("Testeo el método processOptions 'save' ", (t) => {
  const testContacs = new ContactsCollection();
  const test = new ContactsController();
  const mockContact = { id: 5, name: "Nico" };
  const testController = test.processOptions({
    action: "save",
    params: mockContact,
  });
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(test.contacts.contactos, fileContent);
});
