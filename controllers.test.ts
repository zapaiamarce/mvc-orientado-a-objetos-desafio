import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json"; 
import { get } from "node:http";


test("Testeo el constructor del controller", (t) => {
    const model = new ContactsController();
    model.contacts.load();
    t.deepEqual(contactsObject, model.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
const controller = new ContactsController();
const options = new ContactsControllerOptions();
const mockOption = {id: 5333, name: "karen"};
controller.contacts.addOne(mockOption);
const mock = controller.processOptions({action: "get", params: {id:5333,}});

t.deepEqual(mockOption, mock);


});
 