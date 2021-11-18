import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";


test("Testeo el constructor del controller", (t) => {
    var mockController = new ContactsController();
    var mockCollection = new ContactsCollection();
  
  t.deepEqual(mockCollection.load(), mockController.contacts.load())
});

 test("Testeo el método processOptions", (t) => {
    var mockController = new ContactsController();
    
    t.deepEqual(mockController.processOptions({action:"get", params:true}), mockController.contacts.getAll())
    t.deepEqual(mockController.processOptions({action:"get",params:1}),mockController.contacts.getOneById(1))
    


 });
