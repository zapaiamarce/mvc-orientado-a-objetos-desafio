import test from "ava";
import * as jsonfile from "jsonfile"
import * as contactsObject from "./contacts.json";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // testeo el load
  const model = new ContactsController()
  var prueboLoad = model.contacts.contacts
  t.deepEqual(contactsObject, prueboLoad)
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController()
  const newContact = { id: 7, name: "Tomasacre" }
  const optionUno = new ContactsControllerOptions("get", 3)
  // testeo el GET
  var getTres = model.processOptions(optionUno)
  t.deepEqual(contactsObject[2], getTres)
  // testeo el SAVE
  const optionDos = new ContactsControllerOptions("save", newContact)
  model.processOptions(optionDos)
  const fileContent = jsonfile.readFileSync("./contacts.json")
  t.deepEqual(fileContent, model.contacts.getAll())
});
