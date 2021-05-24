import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  const contacs = controller.contacts.data;
  const contactJson = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(contacs, contactJson);
});

test("Testeo el método processOptions", (t) => {
  //metodo getOneById
  const controller = new ContactsController();
  const datosArgv = new ContactsControllerOptions();
  datosArgv.action = "get";
  datosArgv.params = 1;
  const getById = controller.contacts.getOneById(datosArgv.params);
  t.deepEqual(controller.processOptions(datosArgv)[0], getById);

  //metodo getAll
  datosArgv.action = "get";
  const allContacts = controller.contacts.getAll();
  t.deepEqual(controller.processOptions(datosArgv), allContacts);

  //metodo save
  datosArgv.action = "save";
  datosArgv.params = { id: 15, nombre: "Naruto" };
  const contactJson = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(contactJson, allContacts);
});
