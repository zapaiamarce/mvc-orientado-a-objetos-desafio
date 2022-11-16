import test from "ava";
import { ContactsController } from "./controllers";
import * as js from 'jsonfile';
import * as contactsObject from './contacts.json'

test("Testeo el constructor del controller", (t) => {
  const mockController = new ContactsController()
  t.deepEqual(contactsObject, mockController.contacts.getAll())
});

test("Testeo el método processOptions", (t) => {
  const mockController = new ContactsController();
  const mockContact = {
    id: 123,
    name: "Luffy"
  };
  t.deepEqual(contactsObject, mockController.processOptions({action: "get",params:{}}));
  mockController.processOptions({action: "save", params: mockContact});
  t.deepEqual(mockContact, mockController.processOptions({action:"get",params:{id:123}}))
});
