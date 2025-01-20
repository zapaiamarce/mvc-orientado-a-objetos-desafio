import test from "ava";
import { ContactsController } from "./controllers";
import * as path from "path";
import * as jsonfile from "jsonfile";

const testFilePath = path.resolve(__dirname, "../source/contacts.json");
const mockContact = { id: 99, name: "TestUser" };

test.beforeEach(() => {
  jsonfile.writeFileSync(testFilePath, [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
  ]);
});

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts);
  t.deepEqual(controller.contacts.getAll(), [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
  ]);
});

test("Testeo el método processOptions para obtener un contacto por ID", (t) => {
  const controller = new ContactsController();
  const result = controller.processOptions({ action: "get", params: { id: 1, name: "" } });
  t.deepEqual(result, { id: 1, name: "Ana" });
});

test("Testeo el método processOptions para guardar un nuevo contacto", (t) => {
  const controller = new ContactsController();
  controller.processOptions({ action: "save", params: mockContact });

  const allContacts = controller.contacts.getAll();
  t.true(allContacts.some((c) => c.id === mockContact.id && c.name === mockContact.name));
});
