import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", async (t) => {
  const model = new ContactsCollection();
  await model.load();
  t.deepEqual(contactsObject, model.getAll());
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

test("Testeo el save del modelo", async (t) => {
  const model = new ContactsCollection();
  await model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  await model.save();
  const fileContent = await jsonfile.readFile(__dirname + "/contacts.json");
  t.deepEqual(fileContent, model.getAll());
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact);
  const one = model.getOneById(31);
  t.deepEqual(one, mockContact);
});
