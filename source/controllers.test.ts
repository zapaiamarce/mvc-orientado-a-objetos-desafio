import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const listaContactos = new ContactsController();
  t.truthy(listaContactos.contacts);
});

// test("Testeo el método processOptions", (t) => {});
