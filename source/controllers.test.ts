import test from "ava";
import * as js from 'jsonfile';
import * as contactsObject from "./contacts.json";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.deepEqual(contactsObject,controller.contacts.getAll())
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const mockContact2 = {
    name: 'Luffy',
    id: 123
  }
  controller.processOptions({action: 'save', params: mockContact2});
  t.deepEqual(mockContact2, controller.contacts.data[4]);
  t.deepEqual(controller.contacts.getAll(), js.readFileSync(__dirname + '/contacts.json'))
});
