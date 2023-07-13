import test from "ava";
import { ContactsController, type ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController()

  t.truthy(controller.contacts);
  t.truthy(controller.contacts.data);
});

test("Testeo el método processOptions", (t) => {
    const controller:ContactsControllerOptions = {
        action: "get",
        params: {
            id: 2,
            name: ""
        }
    }
    const controllerDos  = new ContactsController();
    const resultado = controllerDos.processOptions(controller)
    t.is(resultado,controllerDos.contacts.data[1])
    
});

// test("testeo el save del metodo processOptions", (t) => {
//     const controllerTres :ContactsControllerOptions = {
//         action: "save",
//         params: {
//             id: 7,
//             name: "Mariano"
//         }
//     }
//     const controllerDos  = new ContactsController();
//     controllerDos.processOptions(controllerTres);
//     const controllerCuatro = new ContactsController();
//     const arrayContacts = controllerCuatro.contacts.data;
//     const contactAChequear = arrayContacts[arrayContacts.length -1];
//     t.is(contactAChequear.id,7)
//     // const newContact = controllerDos.contacts.data[DataTransfer.length - 1]
//     // t.truthy(contactAChequear)
//     console.log(contactAChequear)
// })
