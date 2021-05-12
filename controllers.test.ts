import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController();
    const myContacts = new ContactsCollection();
    const loadData = myContacts.load();
    t.deepEqual(controller.contacts, loadData);   
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();
    const options1 = new ContactsControllerOptions();
    const myContacts = new ContactsCollection();
    myContacts.load();
    //TESTEO OBTENER 1 ID
    options1.action = "get";
    options1.params = {
        id: 1, 
        name: "Ana",
    };

    t.deepEqual(controller.processOptions(options1), myContacts.getOneById(1));
    //Testeo tomar todos.  
    options1.action = "get";
    options1.params = {
        id:611,
        name: "nada"
    }
    
    t.deepEqual(controller.processOptions(options1), myContacts.getAll());

     //Testeo GUARDAR
     options1.action = "save";
     options1.params = {
         id: 65, 
         name: "Eze",
     };
     t.deepEqual(controller.processOptions(options1) , myContacts.getOneById(65) );
     //Borro lo ultimo agregado para que el test siga pasando 
     //si se borra/comenta lo siguiente se observa como en el archivo JSON
     //se crea el objeto con los ultimos parametros de options1.
     myContacts.getAll().splice(myContacts.data.length);
     myContacts.save();
});