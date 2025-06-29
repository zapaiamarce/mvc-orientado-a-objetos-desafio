/*import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});

// test("Testeo el método processOptions", (t) => {});*/
// Importamos la función `test` desde AVA (el framework de testing que estamos usando)
import test from "ava";

// Importamos la clase que vamos a probar
import { ContactsController } from "./controllers";

// Primera prueba: solo verifica que el constructor funcione
test("Testeo el constructor del controller", (t) => {
  const controller = new ContactsController(); // Creamos una instancia del controlador
  t.truthy(controller); // Verificamos que no sea null o undefined
});

// Segunda prueba: obtener todos los contactos
test("Testeo el método processOptions - get sin id", (t) => {
  const controller = new ContactsController(); // Creamos el controlador
  const resultado = controller.processOptions({ action: "get", params: {} });
if (Array.isArray(resultado)) {
  t.true(resultado.length > 0);
} else {
  t.fail("No devolvió un array");
}

});

// Tercera prueba: guardar un nuevo contacto
test("Testeo el método processOptions - save", (t) => {
  const controller = new ContactsController(); // Creamos el controlador
  const nuevoContacto = { id: 9999, name: "TestUser" }; // Definimos un contacto nuevo

  controller.processOptions({ action: "save", params: nuevoContacto }); // Guardamos ese contacto

  // Ahora verificamos que sí se guardó buscándolo por su id
  const resultado = controller.processOptions({ action: "get", params: { id: 9999 } });
  t.deepEqual(resultado, nuevoContacto); // Comparamos si es igual al que guardamos
});

