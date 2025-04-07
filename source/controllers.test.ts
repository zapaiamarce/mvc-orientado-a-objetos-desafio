import test from 'ava';
import { ContactsController } from './controllers';

test('Testeo el constructor del controller', t => {
  // test de ejemplo
  const controller = new ContactsController();
  controller.contacts.load();
  t.truthy(controller.contacts.getAll().length > 0);
});

test('Testeo el método processOptions', t => {
  const controller = new ContactsController();
  controller.contacts.load();

  // Agrega un contacto
  controller.contacts.addOne({ id: 5, name: 'Carlos' });

  // Verificar que el contacto se haya agregado
  const contact = controller.contacts.getOneById(5);

  t.deepEqual(contact, { id: 5, name: 'Carlos' });
});
