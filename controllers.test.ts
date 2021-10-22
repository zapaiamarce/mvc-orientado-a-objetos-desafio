import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {

    //compruebo que el constructor realize el load() y guarde la informacion
    //en la propiedad interna contacts: ContactsCollection 

    const controlador =  new ContactsController()
    t.deepEqual(controlador.contacts.getOneById(1), {"id": 1, "name": "Ana"});
    t.is(controlador.contacts.getOneById(4).name, "Dana");

    //pruebo el método addOne() para chequear si se suma un nuevo contacto 
    //a la lista para eso uso deepEqual para verificar que sean iguales

    const miContacto = {"id": 123, "name": "Flor"};
    controlador.contacts.addOne(miContacto);
    const miContacto2 = controlador.contacts.getOneById(123);
    t.deepEqual(miContacto2, miContacto);

});

test("Testeo el método processOptions", (t) => {

    //testeo la primera opción con {action: "get" y un Id determinado}
    //debiera activar el metodo getOneById()
    const controlador = new ContactsController();
    const opcionGetId = controlador.processOptions({action: "get", params: {"id": 1}})
    const contactoParaComparar = {"id": 1, "name": "Ana"};
    t.deepEqual(opcionGetId, contactoParaComparar);

    //testeo la segunda opción con {action: "get" y un Id que no existe}
    //debiera activar el método getAll()
    const opcionGetAll = controlador.processOptions({action:"get", params: "flor"});
    t.is(opcionGetAll, controlador.contacts.getAll());
});
