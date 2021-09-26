import test from "ava";
import { ContactsController , ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";

test("Testeo el constructor del controller", (t) => {
    const a= new ContactsController()
    const b= new ContactsCollection()
    b.load()
    t.deepEqual(a.contacts.data,b.data)

});

test("Testeo el método processOptions", (t) => {
    const a= new ContactsController();
    const b = new ContactsControllerOptions();
    const obj= {
        "id": 5,
        "name": "Fer"
      };
    b.action= "save";
    b.params= obj 
    a.processOptions(b);
    t.deepEqual(a.contacts.data.find(i=>i.id==5),b.params);
    b.action="get";
    b.params= 5;
    t.deepEqual(a.processOptions(b), obj );
    b.params= undefined;
    t.deepEqual(a.processOptions(b),a.contacts.data);
       
});
