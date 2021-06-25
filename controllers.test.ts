import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", function(t){
    const newController = new ContactsController();
    newController.contacts.load();
    t.deepEqual(contactsObject, newController.contacts.getAll());
});

test("Testeo el método processOptions", function(t) {
    const controllerUno = new ContactsController();
    const controllerDos = new ContactsController();
    
    const mockOptionUno = new ContactsControllerOptions();
    const mockOptionDos = new ContactsControllerOptions();

mockOptionUno.action = "get";
mockOptionUno.params = {id: 1, name: "Ana"};

mockOptionDos.action = "save";
mockOptionDos.params = {id: 2, name: "Paula"};

const prueba = controllerUno.processOptions(mockOptionUno);
controllerDos.processOptions(mockOptionDos);

t.deepEqual(controllerUno.contacts.getOneById(1), prueba);
t.deepEqual(controllerDos.contacts.getOneById(2), mockOptionDos.params);

});
