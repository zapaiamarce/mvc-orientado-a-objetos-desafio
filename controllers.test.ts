import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { readFileSync } from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const myData = readFileSync("./contacts.json");
  const contact = new ContactsController();
  t.deepEqual(contact.contacts.getAll(), myData);
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const firstOpcion = new ContactsControllerOptions();
  const secondOpcion = new ContactsControllerOptions();
  const thirdOpcion = new ContactsControllerOptions();
  const mock = { id: 1, name: "Ana" };
  const mock2 = { id: 4545, name: "Fernandito" };
  firstOpcion.action = "get";
  firstOpcion.params = { id: 1 };
  const result = model.processOptions(firstOpcion);
  t.deepEqual(result, mock); // test get && un id
  model.contacts.load();
  const all = model.contacts.getAll();
  secondOpcion.action = "get";
  secondOpcion.params = [];
  const otherResult = model.processOptions(secondOpcion);
  t.deepEqual(otherResult, all); // test solo get
  thirdOpcion.action = "save";
  thirdOpcion.params = mock2;
  model.processOptions(thirdOpcion);
  const myData = readFileSync("./contacts.json");
  t.deepEqual(model.contacts.getAll(), myData); // test save && un id
});
