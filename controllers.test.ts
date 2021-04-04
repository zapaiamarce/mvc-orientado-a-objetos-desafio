import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers"
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
const contactsController = new ContactsController
t.deepEqual(contactsObject,contactsController.contacts.getAll())
t.truthy(contactsController, typeof ContactsController)
t.truthy(contactsController.contacts, typeof ContactsCollection)
});

test("Testeo el método processOptions", (t) => {
  const contactsController = new ContactsController

  const processMock:ContactsControllerOptions = {
  action: "save",
  params: 1
  };
 
  console.log(contactsController.processOptions(processMock))




});
