import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";

 test("Testeo el constructor del controller", (t) => {
     const controller = new ContactsController();
     const todos = controller.contacts.getAll();
     t.deepEqual(contactsObject, todos);

 });

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController()
    const mock = new ContactsControllerOptions;
    mock.action = "get";
    mock.params= {"id": 3};
    t.deepEqual({"id":3,"name":"Mer"}, controller.processOptions(mock));
});
