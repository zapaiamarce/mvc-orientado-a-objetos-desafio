import test from "ava";
import fs from "fs";
import path from "path";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const controladorPrueba = new ContactsController();
  t.deepEqual(
    controladorPrueba.contacts.data,
    controladorPrueba.contacts.getAll()
  );
  t.is(controladorPrueba.contacts.data[0]?.id, 1);
  t.is(controladorPrueba.contacts.data[0]?.name, "Ana");
});

test("Testeo el método processOptions", (t) => {
  const controladorPrueba = new ContactsController();

  const PruebaGet1 = controladorPrueba.processOptions({
    action: "get",
    params: { id: 3, name: "Mer" },
  });
  t.is(PruebaGet1, controladorPrueba.contacts.getOneById(3));

  const PruebaGet2 = controladorPrueba.processOptions({
    action: "get",
    params: { id: 7, name: "Carl" },
  });

  t.is(PruebaGet2, controladorPrueba.contacts.data);

  //Prueba Action Save
  controladorPrueba.processOptions({
    action: "save",
    params: { id: 5, name: "Juan David" },
  });

  const encontrado = controladorPrueba.contacts.data.find(
    (contact) => contact.id === 5
  );
  t.is(encontrado?.id, 5);
  t.is(encontrado?.name, "Juan David");

  //Prueba Action Null
  const PruebaNull = controladorPrueba.processOptions({
    action: null,
    params: { id: 5, name: "Juan David" },
  });
  t.deepEqual(PruebaNull, "Acción no válida");
});
