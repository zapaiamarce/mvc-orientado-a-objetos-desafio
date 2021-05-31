import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
import * as fs from "fs";
import { readFileSync } from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const contactsController = new ContactsController();
  const allContacts = contactsController.contacts.getAll();
  const archivo = fs.readFileSync("contacts.json").toString();
  const parseado = JSON.parse(archivo);

  t.deepEqual(allContacts, parseado);
});

test("Testeo el método processOptions", (t) => {
  // Pruebo el procesOption para ver si ejecuta los otros metodos que tiene que ejecutar
  // y los comparo ejecutandolos por separado manualente

  const contactsController = new ContactsController();
  const contOption = new ContactsControllerOptions();
  contOption.action = "get";
  contOption.params = [];

  t.deepEqual(
    contactsController.processOptions(contOption),
    contactsController.contacts.getAll()
  );

  contOption.action = "get";
  contOption.params = { id: 23, name: "valen Rey" };
  t.deepEqual(
    contactsController.processOptions(contOption),
    contactsController.contacts.getOneById(contOption.params.id)
  );

  contOption.action = "save";
  contOption.params = { id: 23, name: "valen Rey" };
  const json = readFileSync("./contacts.json");

  t.deepEqual(contactsController.contacts.getAll(), json);
});
