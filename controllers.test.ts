import test from "ava";
import * as jsonfile from "jsonfile";

import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const prueba = new ContactsController();
  const datos = prueba.contacts.getAll();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, datos);
});

test("Testeo el método processOptions", (t) => {
  const prueba = new ContactsController();
  const nuevoContado = { id: 18, name: "Marcela" };

  const encontrado = prueba.processOptions({
    action: "get",
    params: { id: 1 },
  });

  const noEncontrado = prueba.processOptions({
    action: "get",
    params: { id: 15 },
  });

  const guardado = prueba.processOptions({
    action: "save",
    params: nuevoContado,
  });

  const unDato = prueba.contacts.getOneById(1);
  const otroDato = prueba.contacts.getOneById(15);
  t.deepEqual(unDato, encontrado);
  t.deepEqual(otroDato, noEncontrado);
  t.deepEqual(guardado, prueba.contacts.save());
});
