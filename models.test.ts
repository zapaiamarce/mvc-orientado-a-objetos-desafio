import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", (t) => {
  const newModel = new ContactsCollection();
  newModel.load();
  t.deepEqual(contactsObject, newModel.getAll());
});

test("Testeo el addOne del modelo", (t) => {
  const newContactsCollection = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  newContactsCollection.addOne(mockContact);
  t.deepEqual(newContactsCollection.getAll(), [mockContact]);
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
const fileContent = jsonfile.readFileSync("./contacts.json"); 
t.deepEqual(fileContent, model.getAll());
});

test("Testo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
model.addOne(mockContact);
model.getOneById(31);
const one = model.getOneById(31);
t.deepEqual(one, mockContact);
});