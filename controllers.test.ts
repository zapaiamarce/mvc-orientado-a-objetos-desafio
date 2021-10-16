import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";
import { ContactsControllerOptions } from "./controllers"

 test("Testeo el constructor del controller", (t) => {
    const contCntrl = new ContactsController();
    const coleccion = new ContactsCollection();
    coleccion.load();
    t.deepEqual(coleccion,contCntrl.contacts)});



 test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();
    const controllerDos = new ContactsController();

    const mockOptions = new ContactsControllerOptions();
    const mockOptionsDos = new ContactsControllerOptions();

    mockOptions.action = "get";
    mockOptions.params = { id: 2, name: "Paula" };

    mockOptionsDos.action = "save";
    mockOptionsDos.params = { id: 1, name: "Ana" };

    const pruebaGet = controller.processOptions(mockOptions);
    controllerDos.processOptions(mockOptionsDos);

    t.deepEqual(controller.contacts.getOneById(2), pruebaGet);
    t.deepEqual(controllerDos.contacts.getOneById(1), mockOptionsDos.params);
 })
