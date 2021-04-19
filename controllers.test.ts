import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

 test("Testeo el constructor del controller", (t) => {
     const controller = new ContactsController

    t.deepEqual(controller.contacts.arrayData, controller.contacts.getAll())
    t.truthy(controller.contacts.arrayData.length > 0)
 });

test("Testeo el método processOptions", (t) => {
    const argumentoGetConId = new ContactsControllerOptions
    argumentoGetConId.action = "get"
    argumentoGetConId.params = {id : 30}
    const controllerUno = new ContactsController 
    const resultadoGet = controllerUno.processOptions(argumentoGetConId)

    t.deepEqual(resultadoGet, {id:30 , name: "Marce"})
    
    const argumentoGetsinId = new ContactsControllerOptions
    argumentoGetsinId.action = "get"
    argumentoGetsinId.params = {}
    const controllerDos = new ContactsController 
    const resultadoGetDos = controllerDos.processOptions(argumentoGetsinId)

    t.deepEqual(resultadoGetDos, controllerDos.contacts.getAll())

    const argumentoSave = new ContactsControllerOptions
    argumentoSave.action = "save"
    argumentoSave.params = {id : 1 , name : "nuevoContacto"}
    const controllerTres = new ContactsController 
    controllerTres.processOptions(argumentoSave)
    const encontrado = controllerTres.contacts.getOneById(1)
    t.truthy(encontrado)
    t.deepEqual(encontrado, argumentoSave.params)
})