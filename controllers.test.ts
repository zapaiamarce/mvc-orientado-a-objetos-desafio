import test from 'ava';
import { ContactsController } from './controllers';
import { ContactsControllerOptions } from './controllers';
import { ContactsCollection } from './models';

test('Testeo el constructor del controller', (t) => {
  const controller = new ContactsController();
  const ContactsControl = controller.contacts;

  const collection = new ContactsCollection();
  collection.load();
  const contacts = collection.data;

  t.deepEqual(ContactsControl.data, contacts);
});

test('Testeo el método processOptions - get', (t) => {
  const instanaciaControllerOptions = new ContactsControllerOptions();
  instanaciaControllerOptions.action = 'get';
  instanaciaControllerOptions.params = { id: 4 };

  const instanciaController = new ContactsController();
  const pruebaProcess = instanciaController.processOptions(
    instanaciaControllerOptions
  );

  const instanciaCollection = new ContactsCollection();
  instanciaCollection.load();
  const contacts = instanciaCollection.getOneById(4);

  t.deepEqual(pruebaProcess, contacts);
});
