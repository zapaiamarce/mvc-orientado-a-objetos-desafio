import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
    const pruebaConstructor = new ContactsController()
    t.deepEqual(pruebaConstructor.contacts.contactList, pruebaConstructor.contacts.getAll())
});

test("Testeo el método processOptions", (t) => {
    const pruebaConstructor = new ContactsController()
    const getYId = pruebaConstructor.processOptions({action:"get", params: {id:1}})

    t.deepEqual(getYId, pruebaConstructor.contacts.getOneById(1))

    const soloGet = pruebaConstructor.processOptions({action:"get", params: {},})
    t.deepEqual(soloGet, pruebaConstructor.contacts.getAll())

    pruebaConstructor.processOptions({action: "save", params:{id:100, name:"nombre"}})
    pruebaConstructor.contacts.load()
    const archivos = pruebaConstructor.contacts.contactList
    const guardado = pruebaConstructor.contacts.getAll()
    t.deepEqual(archivos, guardado)
});
