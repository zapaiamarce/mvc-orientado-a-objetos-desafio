import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const testConstructor = new ContactsController();
  testConstructor.contacts.load();
  const mockContact = {
    id: 93,
    name: "Marina",
  };
  testConstructor.contacts.addOne(mockContact);
  testConstructor.contacts.save();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, testConstructor.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const testProcessOptions = model.processOptions({
    action: "get",
    params: 3,
  });

  t.deepEqual(testProcessOptions, model.contacts.data);
});
