import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
    let controller = new ContactsController(); 
    t.deepEqual(controller.contacts.data, contactsObject)
});

test("Testeo el método processOptions; si 'get' y id: id:number", (t) => {
    let controller = new ContactsController;

    let expetcted = controller.processOptions({
        action: "get",
        params: {id: 1}
    });
    t.deepEqual(expetcted, {id:1,"name":"Ana"});
});
test("Testeo el método processOptions; si 'get' y id:{}", (t) => {
    let controller = new ContactsController;

    let expetcted = controller.processOptions({
        action: "get",
        params: {}
    });
    t.deepEqual(expetcted, controller.contacts.getAll());
});
test("Testeo el método processOptions; si 'get' y contact", (t) => {
    let controller = new ContactsController;
    let expetcted = controller.processOptions({
        action: "save",
        params: {id:100, name:"calvo"}
    });
    t.deepEqual(controller.contacts.getOneById(100),{id:100, name:"calvo"});
});