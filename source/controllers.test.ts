import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  controller.contacts.getAll();
  t.truthy(controller);
});

test("Testeo el ProcesOptions", (t) => {
  const controller = new ContactsController();
  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  const resultado = controller.processOptions(options);
  t.deepEqual(resultado, { id: 1, name: "Ana" });
});
// test("Testeo el método processOptions", (t) => {});

/*--------------------------------------------------
import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  controller.contacts.getAll();
  t.truthy(controller);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  const opciones: ContactsControllerOptions = {
    action: "get",
    params: { id: 3 },
  };
  const resultado = controller.processOptions(opciones);

  t.deepEqual(resultado, { id: 3, name: "Mer" });
}); */
