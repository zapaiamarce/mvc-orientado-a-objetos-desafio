import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, model.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const mockOptions: ContactsControllerOptions = {
    action: "get",
    params: 4,
  };
  const one = model.contacts.getOneById(4);
  const two = model.processOptions(mockOptions);
  t.deepEqual(one, two);
  const mockOptions2: ContactsControllerOptions = {
    action: "get",
    params: null,
  };
  const three = model.contacts.getAll();
  const four = model.processOptions(mockOptions2);
  t.deepEqual(three, four);
  const mockOptions3: ContactsControllerOptions = {
    action: "save",
    params: 2,
  };
  model.processOptions(mockOptions3);
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, model.contacts.getAll());
});
