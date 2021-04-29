import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { Contact } from "./models";

//- completar los tests para **ContactsController** en **controllers.test.ts**
 test("Testeo el constructor del controller", (t) => {
    const model = new ContactsController();
    const mockContact= { 
      id: 5,
     name: "ariel" };
     model.contacts.load();
     t.deepEqual(mockContact,model.contacts.getOneById(5))
 });

test("Testeo el método processOptions", (t) => {
  const model= new ContactsController();
  const all = model.contacts.getAll();
  const mockOptions = new ContactsControllerOptions();
  mockOptions.action="get";
  mockOptions.params= new Contact;
  t.deepEqual(model.processOptions(mockOptions),all);    
});
