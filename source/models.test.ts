import test from "ava";
import { ContactsCollection } from "./models";
import * as path from "path";
import * as jsonfile from "jsonfile";

const testFilePath = path.resolve(__dirname, "../source/contacts.json");

test.beforeEach(() => {
  jsonfile.writeFileSync(testFilePath, [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
  ]);
});

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(model.getAll(), [
    { id: 1, name: "Ana" },
    { id: 2, name: "Paula" },
  ]);
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  t.deepEqual(model.getAll(), [mockContact]);
});
test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = { id: 3, name: "Dana" };
  model.addOne(mockContact);
  model.save();

  const fileContent = jsonfile.readFileSync(testFilePath);
  t.deepEqual(fileContent, model.getAll());
});
