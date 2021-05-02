import test, { todo } from "ava";
import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const mockController = new ContactsController();
  const mockContactos = new ContactsCollection();
  mockContactos.load();

  t.deepEqual(mockController.contacts.data, mockContactos.data);
});

test("Testeo el método processOptions caso 1", (t) => {
  const mockController = new ContactsController();
  const mockOptions = new ContactsControllerOptions();

  mockOptions.action = "get";
  mockOptions.params = {
    id: 1,
  };

  const resultado = mockController.processOptions(mockOptions);

  const mockContactos = new ContactsCollection();
  mockContactos.load();
  const encontrado = mockContactos.getOneById(1);

  t.deepEqual(resultado, encontrado);
});

test("Testeo el método processOptions caso 2", (t) => {
  const mockController = new ContactsController();
  const mockOptions = new ContactsControllerOptions();

  mockOptions.action = "get";
  mockOptions.params = {
    name: "No tengo id",
  };

  const resultado = mockController.processOptions(mockOptions);

  const mockContactos = new ContactsCollection();
  mockContactos.load();
  const todos = mockContactos.getAll();

  t.deepEqual(resultado, todos);
});

test("Testeo el método processOptions caso 3", (t) => {
  const mockController = new ContactsController();
  const mockOptions = new ContactsControllerOptions();

  const objAgregar = {
    id: 26,
    name: "Eze",
  };

  mockOptions.action = "save";
  mockOptions.params = objAgregar;

  mockController.processOptions(mockOptions);

  const mockContactos = new ContactsCollection();
  mockContactos.load();

  t.deepEqual(mockController.contacts.data, mockContactos.data);
});
