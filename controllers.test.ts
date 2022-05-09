import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
// import { Contact } from "./models"
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
    const controller  = new ContactsController;
    const contactList = jsonfile.readFileSync('./contacts.json');
    t.deepEqual(controller.contacts.data,contactList, "Test no pasado.");
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController;
    
    const optionGetTrue = new ContactsControllerOptions("get", 3);
    const userFindedByContactsMethod = controller.contacts.getOneById(3);
    const userFindedTrue = controller.processOptions(optionGetTrue);

    const optionGetFalse = new ContactsControllerOptions("get", 9989);
    const getAll = controller.contacts.getAll();
    const userFindedFalse = controller.processOptions(optionGetFalse);


    t.is(userFindedTrue, userFindedByContactsMethod, "Test no pasò, get TRUE y la DB no son iguales");
    t.is(userFindedFalse, getAll, "Test no paso, get FALSE y la DB no son iguales.");
    
   
    // t.deepEqual(controller.contacts.getAll(), [mockContact], "Test Save no pasó.")
});

test("Testeo metodo Save", (t) => { 
    const controller = new ContactsController;

    const mockContact = {
        id: 888,
        name: "Seba"
    }
    
    const optionSave = new ContactsControllerOptions("save", mockContact);
    controller.processOptions(optionSave);
    const one = controller.contacts.getOneById(888);
    t.deepEqual(one, mockContact, "Test save user no pasó");

})
