import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  const fileModel = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(fileModel, model.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const pruebaPrimerIf = model.processOptions({
    action: "get",
    params: { id: 1 },
  });
  const comparadorPruebaPrimerIf = model.contacts.getOneById(1);
  t.deepEqual(pruebaPrimerIf, comparadorPruebaPrimerIf);

  const pruebaSegundoIf = model.processOptions({
    action: "get",
    params: "hola",
  });
  const comparadorPruebaSegundoIf = model.contacts.getAll();
  t.deepEqual(pruebaSegundoIf, comparadorPruebaSegundoIf);

  const pruebaTercerIf = model.processOptions({
    action: "save",
    params: { id: 5, name: "Ignacio" },
  });
  const comparadorPruebaTercerIf = model.contacts.getOneById(5);
  t.deepEqual(comparadorPruebaTercerIf, { id: 5, name: "Ignacio" });
});
