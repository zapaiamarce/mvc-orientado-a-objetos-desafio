import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsJson from "./contacts.json";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const prueba = new ContactsController();
    t.deepEqual(prueba.contacts.datosContacts, contactsJson);
});

test("Testeo el método processOptions Get con Params", (t) => {
    const prueba = new ContactsController();
    const objPrueba = new ContactsControllerOptions();
    objPrueba.action = "get";
    objPrueba.params = 2;
    const resultado = prueba.processOptions(objPrueba);
    const compare = { id: 2, name: "Paula" };
    t.deepEqual(resultado, compare);
});

test("Testeo el método processOptions Get sin Params", (t) => {
    const prueba = new ContactsController();
    const objPrueba = new ContactsControllerOptions();
    objPrueba.action = "get";
    objPrueba.params = null;
    const resultado2 = prueba.processOptions(objPrueba);
    t.deepEqual(resultado2, contactsJson);
});

test("Testeo el método processOptions Save", (t) => {
    const prueba = new ContactsController();
    const objPrueba = new ContactsControllerOptions();
    objPrueba.action = "save";
    objPrueba.params = { id: 7, name: "Pablo" };
    prueba.processOptions(objPrueba);
    t.is(prueba.contacts.getOneById(7).name,"Pablo");
});