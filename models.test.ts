import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsOfJson from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", (t) => {
  const newContactsCollection = new ContactsCollection();
  newContactsCollection.load();
  t.deepEqual(contactsOfJson, newContactsCollection.getAll());
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
  const newContactsCollection = new ContactsCollection();
  newContactsCollection.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  newContactsCollection.addOne(mockContact);
  newContactsCollection.save();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, newContactsCollection.getAll());
});

test("Testeo el getOneById del modelo", (t) => {
  const newContactsCollection = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  newContactsCollection.addOne(mockContact);
  const getOneId = newContactsCollection.getOneById(31);
  t.deepEqual(getOneId, mockContact);
});
