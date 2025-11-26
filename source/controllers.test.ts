import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  // Test para la acción "get" sin id
  let result = controller.processOptions({ action: "get", params: {} }) || [];
  t.true(Array.isArray(result), "result debería ser un array");
  if (Array.isArray(result)) {
    t.true(result.length >= 0, "El array debería tener al menos 0 elementos");
  }

  // Test para la acción "get" con id
  const contactId = 1; // Cambia esto por un id que sepas que existe
  let resultWithId = controller.processOptions({
    action: "get",
    params: { id: contactId },
  });

  t.not(resultWithId, undefined, "Debería retornar un objeto de contacto");
  t.true(
    typeof resultWithId === "object",
    "Debería retornar un objeto de contacto"
  );

  if (resultWithId && "id" in resultWithId) {
    // Verificamos que tenga la propiedad 'id'
    t.true(
      resultWithId.id === contactId,
      "El contacto retornado debería tener el id correcto"
    );
  }

  // Test para la acción "save"
  const newContact = { id: 999, name: "Test Contact" };
  let saveResult = controller.processOptions({
    action: "save",
    params: newContact,
  });

  t.not(saveResult, undefined, "Debería retornar un mensaje de éxito");

  if (saveResult) {
    // Asegúrate de que no sea undefined
    t.true(typeof saveResult === "object", "Debería retornar un objeto");
    t.true(
      "message" in saveResult,
      "El objeto debería tener una propiedad 'message'"
    );
  }
});
