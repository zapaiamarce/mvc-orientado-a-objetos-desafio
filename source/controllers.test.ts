import test from "ava";
import { ContactsController } from "./controllers";
import  {ContactsCollection} from "./models";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo

  const controller= new ContactsController();
  t.truthy(controller.contacts);

  t.notDeepEqual(controller.contacts.data, []);
});

 test("Testeo el método processOptions - get todos los contactos", (t) => {

  const controller = new ContactsController();
  const result = controller.processOptions({
    action: "get",
    params:{}
  });
  t.deepEqual(result, controller.contacts.getAll());
 });

 test("testeo el metodo processOptions - get un contacto por id ", (t) => {
  const controller = new ContactsController();

  const contact =controller.contacts.getOneById('1');

  const  result = controller.processOptions({
    action: "get",
    params:{id:'1'}
  });
  t.deepEqual(result, contact);
 });

 test("Testeo el metodo processOptions - save", (t) => {
  const controller = new ContactsController();

  
  
  const newContact = {
    id: 30,
    name: "Marce",
  }
   controller.processOptions({
     action: "save",
     params: newContact
   });

   const allContacts =controller.contacts.getAll();
   
   t.true(allContacts.some((contact => contact.id === 30)));
 });
