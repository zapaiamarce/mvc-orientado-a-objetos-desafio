import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { readFileSync } from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const instancia = new ContactsController();
  const contactos = readFileSync("./contacts.json");
  t.deepEqual(instancia.contacts.getAll(), contactos);
});

test("Testeo el método processOptions", (t) => {
  const instancia = new ContactsController();
  const inPutConId: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  const outPutConId = instancia.processOptions(inPutConId);
  const salidaEsperadaId = { id: 1, name: "Ana" };

  t.deepEqual(outPutConId, salidaEsperadaId);

  const inPutSinId: ContactsControllerOptions = {
    action: "get",
    params: 15,
  };
  const outPutSinId = instancia.processOptions(inPutSinId);
  t.deepEqual(outPutSinId, instancia.contacts.getAll());

  const inputSave: ContactsControllerOptions = {
    action: "save",
    params: { id: 27, name: "Juan" },
  };
  instancia.processOptions(inputSave);

  const encontrado = instancia.contacts.getOneById(27);

  t.deepEqual(encontrado, inputSave.params);
});
