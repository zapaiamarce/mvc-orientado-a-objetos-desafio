import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const newCont = new ContactsController();
  const mock1 = {
    id: 45,
    name: "Mac",
  };

  const proc1 = newCont.processOptions({
    action: "get",
    params: { id: 45 },
  });

  t.deepEqual(mock1, proc1);
});

test("Testeo processOptions sin id", (t) => {
  const newCont = new ContactsController();
  const proc1 = newCont.processOptions({
    action: "get",
    params: {},
  });

  t.deepEqual(newCont.contacts.getAll(), proc1);
});

test("Testeo processOptions SAVE", (t) => {
  const newCont = new ContactsController();
  newCont.contacts.load();
  newCont.processOptions({
    action: "save",
    params: { id: 45, name: "mich" },
  });

  const newList = newCont.contacts.getAll();
  const fileContent = jsonfile.readFileSync("source/contacts.json");
  t.deepEqual(fileContent, newList);
});
