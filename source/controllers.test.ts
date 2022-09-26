import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";


test("Testeo el constructor del controller", (t) => {
  t.truthy(true);
  const modelo = new ContactsController();
  t.truthy(modelo.contacts)

});

test("Testeo el método processOptions", (t) => {
  const modelo= new ContactsController();
  const opciones: ContactsControllerOptions = {
    action: "get",
    params: {id: 1}
  };
  t.deepEqual(modelo.processOptions(opciones), {id:1, name: "Ana"})
});
