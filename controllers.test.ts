import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as contacts from "./contacts.json"

test("Testeo el constructor del controller", (t) => {
  const collection = new ContactsCollection;
  collection.load();
  const cController = new ContactsController;
  t.deepEqual(cController.contacts.getAll(), collection.getAll());
})

test("Testeo el método processOptions", (t) => {
  const newContact = { id: 5, name: "Ariel" };
  const existingContact = contacts.find(c => c.id == 3);
  
  const cOptionsOne = new ContactsControllerOptions("get", "-");
  const cOptionsTwo = new ContactsControllerOptions("get", 3);
  const cOptionsThree = new ContactsControllerOptions("save", newContact);
  
  const cController = new ContactsController;

  t.deepEqual(contacts, cController.processOptions(cOptionsOne));
  t.deepEqual(existingContact, cController.processOptions(cOptionsTwo));

  cController.processOptions(cOptionsThree);
  const foundContact = cController.contacts.data.find(c => c == newContact); 

  t.deepEqual(foundContact, newContact);
})
