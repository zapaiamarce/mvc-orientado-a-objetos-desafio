import test from "ava";
import { ContactsCollection } from "./models";
import { readFileSync, writeFileSync } from "jsonfile";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts);
});

test("Testeo el método processOptions con get y id", (t) => {
  const controller = new ContactsController(); /// instancio mi controller {contacts[arrayGuardado y metodos], processOptions()}
  const mockOptions = new ContactsControllerOptions(); //instancio mi class options {action:"get"|"save", params:{id}}

  const listaContactos = readFileSync(__dirname + "/contacts.json");
  mockOptions.action = "get";
  mockOptions.params = { id: 1 };
  const datoByOptions = controller.processOptions(mockOptions);
  t.deepEqual(datoByOptions, listaContactos[0]); //controller.contacts.datosGuardados[0]
});

test("Testeo el método processOptions con get y sin id", (t) => {
  const controller = new ContactsController();
  const mockOptions = new ContactsControllerOptions();
  const listContacts = readFileSync(__dirname + "/contacts.json");

  mockOptions.action = "get";
  mockOptions.params = {};
  const datos = controller.processOptions(mockOptions);
  t.deepEqual(datos, listContacts);
});

test("Testeo el método processOptions con el metodo save", (t) => {
  const controller = new ContactsController();
  const mockOptions = new ContactsControllerOptions();

  mockOptions.action = "save";
  mockOptions.params = { id: 30, name: "Marce" };
  const datos = controller.processOptions(mockOptions);
  t.deepEqual(datos, controller.contacts.datosGuardados);
});
