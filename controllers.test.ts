import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";
test("Testeo el constructor del controller", (t) => {
    const model = new ContactsController();
  t.deepEqual(contactsObject, model.contacts.data);
});

test("Testeo el método processOptions", (t) => {
    const model = new ContactsController();
    const mockContact = new ContactsControllerOptions
    mockContact.action = "get"
    mockContact.params = 1
    const resultado = model.processOptions(mockContact)
    t.deepEqual(contactsObject[0], resultado)
});

test("Testeo el método processOptions nuevamente", (t) => {
    const model = new ContactsController();
    const mockContact = new ContactsControllerOptions
    mockContact.action = "get"
    const resultado = model.processOptions(mockContact)
    t.deepEqual(contactsObject, resultado)
});


test("Testeo el método processOptions por tercera vez", (t) => {
    const model = new ContactsController();
    const mockContact = new ContactsControllerOptions
    mockContact.action = "save"
    mockContact.params = {id:6, name:"Milo"}
    const funcion = model.processOptions(mockContact)
    const listaNueva = model.contacts.data
    t.deepEqual(contactsObject, listaNueva)
});