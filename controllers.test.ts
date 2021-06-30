import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.deepEqual(contactsObject, controller.contacts.getAll());
});

test("Testeo el método processOptions - get one", (t) => {
  const controllerOptions = new ContactsControllerOptions();

  // mock
  controllerOptions.action = "get";
  controllerOptions.params = { id: 1 };

  const controller = new ContactsController();
  const element = controller.processOptions(controllerOptions);

  t.deepEqual(contactsObject[0], element); // Comparo el primer obj de contacts.json con el funcionamiento de processOptions() con ese mock (que debe devolver ese obj)
});

test("Testeo el método processoptions - get all", (t) => {
  const controllerOptions = new ContactsControllerOptions();

  //mock
  controllerOptions.action = "get";
  controllerOptions.params = true;

  const controller = new ContactsController();
  const all = controller.processOptions(controllerOptions);

  t.deepEqual(contactsObject, all);
});

test("Testeo el método processOptions - save", (t) => {
  const options = new ContactsControllerOptions();

  // mock
  options.action = "save";
  const mockContact = {
    id: 50,
    name: "Ana",
  };
  options.params = mockContact;

  const contactsController = new ContactsController();
  contactsController.processOptions(options); // creo

  options.action = "get";
  options.params = { id: 50 };
  const element = contactsController.processOptions(options); // recupero
  t.deepEqual(element, mockContact);
});
