import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { readFileSync } from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const contactsController = new ContactsController();
  const allContacts = contactsController.contactsOfModel.getAll();
  const fileJson = readFileSync("./contacts.json");
  t.deepEqual(allContacts, fileJson);
});

test("Testeo el método processOptions", (t) => {
  const contactsController = new ContactsController();
  const contactsControllerOptions = new ContactsControllerOptions();
  contactsControllerOptions.action = "get";
  contactsControllerOptions.params = true;
  const allContacts = contactsController.contactsOfModel.getAll();
  t.deepEqual(
    contactsController.processOptions(contactsControllerOptions),
    allContacts
  );
  contactsControllerOptions.action = "get";
  contactsControllerOptions.params = 2;
  t.deepEqual(
    contactsController.processOptions(contactsControllerOptions),
    contactsController.contactsOfModel.getOneById(2)
  );
  contactsControllerOptions.action = "save";
  contactsControllerOptions.params = { id: 99, name: "Contacto mock" };
  contactsController.processOptions(contactsControllerOptions);
  const fileJson = readFileSync("./contacts.json");
  t.deepEqual(allContacts, fileJson);
});
