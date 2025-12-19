import test from "ava";
import { ContactsController } from "./controllers";
import { CONNREFUSED } from "dns";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

// test("Testeo el método processOptions", (t) => {});
test("Testeo el metodo processOptions en el caso en el que action es get y existe params.id", (t) => {
  const instaciaDePrueba = new ContactsController();
  const resultado = instaciaDePrueba.processOptions({
    action: "get",
    params: { id: 3 },
  });
  const esperado = instaciaDePrueba.contacts.arrayDeContactos.find(
    (c) => c.id === 3
  );
  t.deepEqual(resultado, esperado);
});

test("Testeo el metodo processOptions en el caso en el que action es get y NO existe params.id", (t) => {
  const instaciaDePrueba = new ContactsController();
  const resultado = instaciaDePrueba.processOptions({
    action: "get",
    params: {},
  });
  const esperado = instaciaDePrueba.contacts.arrayDeContactos;
  t.deepEqual(resultado, esperado);
});

test("Testeo el metodo processOptions en el caso en el que action es save", (t) => {
  const instaciaDePrueba = new ContactsController();
  instaciaDePrueba.processOptions({
    action: "save",
    params: { id: 5, name: "prueba" },
  });
  const resultado = instaciaDePrueba.contacts.arrayDeContactos.find(
    (c) => c.id === 5
  );
  const esperado = { id: 5, name: "prueba" };
  t.deepEqual(resultado, esperado);
});
