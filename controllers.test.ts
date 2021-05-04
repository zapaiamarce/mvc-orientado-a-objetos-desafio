import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const controlador = new ContactsController();
  t.deepEqual(jsonfile.readFileSync("./contacts.json"), controlador.contacts.contacts)
});

test("Testeo el método processOptions", (t) => {
  const controlador = new ContactsController();
  const parametroPrueba1 = new ContactsControllerOptions();
  parametroPrueba1.action = "get";
  parametroPrueba1.params = 1;
  const mockResult1 = controlador.processOptions(parametroPrueba1)
  const mockExpected1 = {
    id: 1,
    name: "Ana" 
  }

  const parametroPrueba2 = new ContactsControllerOptions();
  parametroPrueba2.action = "get";
  const mockResult2 = controlador.processOptions(parametroPrueba2)
  const mockExpected2 = jsonfile.readFileSync("./contacts.json")

  t.deepEqual(mockExpected1, mockResult1)
  t.deepEqual(mockExpected2, mockResult2)

});
