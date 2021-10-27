import test from 'ava';
import { ContactsController, ContactsControllerOptions } from './controllers';
import * as contactsObject from './contacts.json';

test('Testeo el constructor del controller', (t) => {
  const contact = new ContactsController();

  t.deepEqual(contact.contacts.getAll(), contactsObject);
});

test('Testeo el método processOptions', (t) => {
  const contact = new ContactsController();
  const params = new ContactsControllerOptions();
  params.action = 'get';
  params.params = 1;

  t.deepEqual(contact.processOptions(params), contact.contacts.getOneById(1));
});
