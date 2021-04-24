import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller, load()", (t) => {
    let controller = new ContactsController(); 
    t.deepEqual(controller.contacts.data, contactsObject) //testeo load()
})
test("Testeo el constructor del controller, contacts", (t) => {
    let controller = new ContactsController(); 
    let contactModel = new ContactsCollection; //testeo contacts
    contactModel.load();
    t.deepEqual(controller.contacts, contactModel)
});

test("Testeo el método processOptions si 'get' y id true", (t) => {
    let controller1 = new ContactsController;

    t.deepEqual(controller1.processOptions({
        action: "get",
        params: {id: 1}
    }), {id:1,"name":"Ana"});
})
test("Testeo el método processOptions si 'get' y id null", (t) => {
    let controller2 = new ContactsController;

    t.deepEqual(controller2.processOptions({
        action: "get",
        params: false
    }), contactsObject);
})
test("Testeo el método processOptions si 'get' y contact", (t) => {
    let controller3 = new ContactsController;

    controller3.processOptions({
        action: "save",
        params: {id:8, name:"calvo"}
    });
    controller3.contacts.load();
    t.deepEqual(controller3.contacts.data[5],{id:8, name:"calvo"});
})
