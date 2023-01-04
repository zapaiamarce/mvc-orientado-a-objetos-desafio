import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const mockController = new ContactsController();
  const mockContacts = mockController.contacts.getAll();
  const file = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(mockContacts, file);
});

test("Testeo el método processOptions", (t) => {
  const mockController = new ContactsController();
  const process = mockController.processOptions({
    action: "get",
    params: null,
  });
  const file = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(process, file);

  const process2 = mockController.processOptions({
    action: "save",
    params: { id: 6, name: "uldo" },
  });
  const name = mockController.contacts.getAll().find((c) => {
    return c.name == "uldo";
  });

  t.truthy(name);
});
