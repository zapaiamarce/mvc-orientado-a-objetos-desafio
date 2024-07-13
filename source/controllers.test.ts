import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
   let a: ContactsController = new ContactsController();
   let b = a.contacts.getOneById(1);
   t.is(b.name, 'Ana')
}); 

test("Testeo el método processOptions", (t) => {
   let a: ContactsControllerOptions = {
     action: 'get',
     params: 1 };
   let b: ContactsController = new ContactsController();
   let resultado = b.processOptions(a);
   t.is(resultado.name, 'Ana')
});
