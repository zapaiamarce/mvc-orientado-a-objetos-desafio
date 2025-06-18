import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  //Test de Get By Id
  const pGetId: ContactsControllerOptions = {
    action: "get",
    params: { id: 4 },
  };
  const pGetIdResultado = controller.processOptions(pGetId);
  const mockGetId = {
    id: 4,
    name: "Dana",
  };
  t.deepEqual(pGetIdResultado, mockGetId);
  //Test de Get All
  const pGetAll: ContactsControllerOptions = {
    action: "get",
    params: { x: 5 },
  };
  const pGetAllResultado = controller.processOptions(pGetAll);
  const mockGetAllResultado = [
    {
      id: 1,
      name: "Ana",
    },
    {
      id: 2,
      name: "Paula",
    },
    {
      id: 3,
      name: "Mer",
    },
    {
      id: 4,
      name: "Dana",
    },
  ];
  t.deepEqual(pGetAllResultado, mockGetAllResultado);
  //Test de Save
  const pSave: ContactsControllerOptions = {
    action: "save",
    params: { id: 7, name: "Hernán" },
  };
  controller.processOptions(pSave);
  const archivoActualizado = controller.processOptions(pGetAll);
  const mockSaveResultado = [
    {
      id: 1,
      name: "Ana",
    },
    {
      id: 2,
      name: "Paula",
    },
    {
      id: 3,
      name: "Mer",
    },
    {
      id: 4,
      name: "Dana",
    },
    { id: 7, name: "Hernán" },
  ];
  t.deepEqual(archivoActualizado, mockSaveResultado);
});
