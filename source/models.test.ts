// ...existing code...
import test from "ava";
import { ContactsCollection } from "./models";
// import contactsObject from "./contacts.json"; // eliminado
import * as jsonfile from "jsonfile";
import * as path from "path";
import * as fs from "fs";

const asArray = (v: any) => (Array.isArray(v) ? v : v?.default ?? v);

const ORIGINAL_CONTACTS = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Paula" },
  { id: 3, name: "Mer" },
  { id: 4, name: "Dana" },
];

const FILE_PATH = path.join(process.cwd(), "source", "contacts.json");

test.beforeEach(() => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(ORIGINAL_CONTACTS, null, 2), {
    encoding: "utf8",
  });
});

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(asArray(ORIGINAL_CONTACTS), asArray(model.getAll()));
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  const allContacts = model.getAll();
  t.true(asArray(allContacts).length > 0);
  t.deepEqual(
    asArray(allContacts)[asArray(allContacts).length - 1],
    mockContact
  );
});

test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  model.save();
  const filePath = path.join(process.cwd(), "source", "contacts.json");
  const fileContent = jsonfile.readFileSync(filePath);
  t.true(asArray(fileContent).length > 0);
  t.deepEqual(asArray(fileContent), asArray(model.getAll()));
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact);
  const one = model.getOneById(31);
  t.deepEqual(one, mockContact);
});
// ...existing code...
