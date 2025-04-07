import test from 'ava';
import { ContactsController } from './controllers';

test('Testeo el constructor del controller', t => {
  const controller = new ContactsController();
  controller.contacts.load(); // Asegurarte de que los datos se carguen
  t.truthy(controller.contacts.getAll().length > 0); // Verificar que haya contactos
});

test('Testeo el método processOptions', t => {
  const controller = new ContactsController();
  controller.contacts.load(); // Cargar los datos

  // Agregar un contacto
  controller.contacts.addOne({ id: 5, name: 'Carlos' });

  // Verificar que el contacto se haya agregado
  const contact = controller.contacts.getOneById(5);
  t.deepEqual(contact, { id: 5, name: 'Carlos' }); // Comparar objetos
});
