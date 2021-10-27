import test from 'ava';
import { ContactsController, ContactsControllerOptions } from './controllers';
import * as contactsObject from './contacts.json';
import * as jsonfile from 'jsonfile';

test('Testeo el constructor del controller', (t) => {
  const contact = new ContactsController();

  t.deepEqual(contact.contacts.getAll(), contactsObject);
});

//test('Testeo el método processOptions', (t) => {});
