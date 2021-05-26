import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection, Contact } from "./models";
import * as JsonFile from "jsonfile";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";
test("Testeo el constructor del controller", (t) => {
  const nuevoController = new ContactsController();
  const contactsJSON = JsonFile.readFileSync("./contacts.json");
  t.deepEqual(contactsJSON, nuevoController.contacts.users);
});

test("Testeo el método processOptionsGET+ID", (t) => {
  const nuevoController = new ContactsController();
  const nuevoInputMock = new ContactsControllerOptions("get", { id: 2 });
  const Prueba = nuevoController.processOptions(nuevoInputMock);
  t.deepEqual(
    nuevoController.contacts.getOneById(nuevoInputMock.params.id),
    Prueba
  );
});

test("Testeo el metodo proccessOptionGET", (t) => {
  const nuevoController = new ContactsController();
  const nuevoInputMock = new ContactsControllerOptions("get", {});
  const Prueba = nuevoController.processOptions(nuevoInputMock);
  const contactsJSON = JsonFile.readFileSync("./contacts.json");

  t.deepEqual(contactsJSON, Prueba);
});

test("Testeo el metodo proccessOptionSAVE", (t) => {
  const nuevoController = new ContactsController();
  const nuevoInputMock = new ContactsControllerOptions("save", {});
  nuevoController.processOptions(nuevoInputMock);
  const contactsJSON = JsonFile.readFileSync("./contacts.json");
  t.deepEqual(contactsJSON, nuevoController.contacts.users);
});
