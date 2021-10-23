import test from "ava";
import { ContactsController } from "./controllers";
import * as fs from 'fs';

test("Testeo el constructor del controller", (t) => {
    const contactos = new ContactsController().contacts;
    t.deepEqual(contactos.listaContactos[0], {"id":1,"name":"Ana"});
    t.deepEqual(contactos.listaContactos[1], {"id":2,"name":"Paula"});
});

test("Testeo el método processOptions", (t) => {
    const nuevo = new ContactsController();
    const traerPorId = nuevo.processOptions({action: "get", params: {id: 2}});
    const traerTodos = nuevo.processOptions({action: "get", params: "trae todos papu"});
    const ejemploDeNuevoContacto = {id: 50, name: "Javier"};
    nuevo.processOptions({action:"save", params:{id: 50, name: "Javier"}});
    const todosJson = JSON.parse(fs.readFileSync(`${__dirname}/contacts.json`).toString());
    t.deepEqual(traerTodos, nuevo.contacts.getAll());
    t.deepEqual(traerPorId, {"id":2,"name": "Paula"});
    t.deepEqual(nuevo.contacts.listaContactos, todosJson);
});
