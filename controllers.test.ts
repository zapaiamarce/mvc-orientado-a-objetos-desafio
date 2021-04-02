import test from "ava";
import { ContactsController } from "./controllers";
import * as contacts from "./contacts.json";
import { ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const mockContact = new ContactsController();
  t.deepEqual(contacts, mockContact.contacts.getAll());
});

test("Testeo el método processOptions", (t) => {
  const mockContacto = new ContactsController();
  const busqueda = mockContacto.contacts.getOneById(1);
  const mockOpciones = new ContactsControllerOptions();
  mockOpciones.action = "get";
  mockOpciones.params = 1;
  const resultado = mockContacto.processOptions(mockOpciones);
  t.deepEqual(busqueda, resultado);
});
