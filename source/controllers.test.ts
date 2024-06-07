import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController();
  t.truthy(controller.contacts);
  // Verifica que la propiedad 'contacts' se haya inicializado correctamente
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  // OPCIONES:
  // Test con action 'get' y id--------------------------------------------------

  let options: ContactsControllerOptions = {
    action: "get",
    params: { id: 1 },
  };
  let resultado = controller.processOptions(options);
  t.truthy(resultado);

  // Test con action 'get' sin id----------------------------------------------
  options = {
    action: "get",
    params: null,
  };
  resultado = controller.processOptions(options);
  t.truthy(resultado);

  // Test con action 'save' y params--------------------------------------------
  options = {
    action: "save",
    params: { name: "Nuevo Contacto", id: 1 }, // Corregir el tipo de 'id' a number si corresponde
  };
  resultado = controller.processOptions(options);
  t.truthy(resultado);
});
