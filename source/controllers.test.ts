import test from "ava";
import { ContactsController } from "./controllers"; // Solo importa ContactsController
import { ContactsCollection } from "./models"; // Importa ContactsCollection desde models

test("Testeo el constructor del controller", (t) => {
  const contactos = new ContactsController();
  
  // Verificar que contacts es una instancia de ContactsCollection
  t.true(contactos.contacts instanceof ContactsCollection);
  
  // Verificar que internalDate esté vacío al inicio
  t.deepEqual(contactos.contacts.internalDate, []); // Verifica que sea un array vacío
  
  t.truthy(true); // Esto puede quedarse si quieres mantenerlo
});
