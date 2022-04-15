import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const contactsController = new ContactsController();
  t.deepEqual(contactsObject, contactsController.contacts.getAll());
});

test("Testeo el método processOptions - get one", (t) => {
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = { id: 1 };
  const contactsController = new ContactsController();
  const firstElement = contactsController.processOptions(options);
  t.deepEqual(contactsObject[0], firstElement);
});

test("Testeo el método processOptions - get all", (t) => {
  const options = new ContactsControllerOptions();
  options.action = "get";
  options.params = { id: 99 };
  const contactsController = new ContactsController();
  const allElements = contactsController.processOptions(options);
  t.deepEqual(contactsObject, allElements);
});

test("Testeo el método processOptions - save", (t) => {
  const options = new ContactsControllerOptions();
  options.action = "save";
  const mockContact = {
    id: 77,
    name: "Test user",
  };
  options.params = mockContact;
  const contactsController = new ContactsController();
  contactsController.processOptions(options);

  options.action = "get";
  options.params = { id: 77 };
  const element = contactsController.processOptions(options);
  t.deepEqual(element, mockContact);
});
