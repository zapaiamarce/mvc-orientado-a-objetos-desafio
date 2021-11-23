import test from "ava";
import {ContactsController, ContactsControllerOptions} from "./controllers";
import {Contact, ContactsCollection} from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const collection = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(controller.contacts.arrayConLaData, collection);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController
  const contact = new Contact
  contact.name = "luis"
  contact.id = 5
  const mockOption = new ContactsControllerOptions
  mockOption.action = "get"
  mockOption.params = contact

  const actual = controller.processOptions(mockOption)
  const busqueda = controller.contacts.getOneById(5)
  t.is(actual, busqueda)
});

