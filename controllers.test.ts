import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
   const coleccion = new ContactsController();

   t.deepEqual(
      {
         id: 1,
         name: "Ana",
      },
      coleccion.contacts.getOneById(1)
   );
});

test("Testeo el método processOptions", (t) => {
   var controlUno = new ContactsControllerOptions("get");
   var controlDos = new ContactsControllerOptions("get", 3);
   var controlTres = new ContactsControllerOptions("save", {
      id: 5,
      name: "Sofi",
   });
   var controlContactos = new ContactsController();

   t.is(
      controlContactos.processOptions(controlUno),
      controlContactos.contacts.getAll()
   );
   t.is(
      controlContactos.processOptions(controlDos),
      controlContactos.contacts.getOneById(3)
   );

   controlContactos.processOptions(controlTres);

   t.deepEqual(
      controlContactos.contacts.data[controlContactos.contacts.data.length - 1],
      {
         id: 5,
         name: "Sofi",
      }
   );
});
