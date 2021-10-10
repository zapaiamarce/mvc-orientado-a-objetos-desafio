import test from 'ava';
import { ContactsCollection } from './models';
import * as contactsObject from './contacts.json';
import * as jsonfile from 'jsonfile';

test('Testeo el constructor del controller', (t) => {
  // const contactsController = new ContactsController();
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(contactsObject, model.getAll());
});

test('Testeo el método processOptions', (t) => {
  // const contactsController = new ContactsController();
  const model = new ContactsCollection();
  // Test getOneById
  const mockContact = {
    id: 32,
    name: 'Misael Test Controller',
  };
  model.addOne(mockContact);
  const one = model.getOneById(32);
  t.deepEqual(one, mockContact);
  // Test getAll
  model.load();
  const fileContent = jsonfile.readFileSync('./contacts.json');
  t.deepEqual(fileContent, model.getAll());
  // Test addOne
  const mockContact2 = {
    id: 33,
    name: 'Pablo Test Controller',
  };
  model.addOne(mockContact2);
  model.save();
  const fileContent2 = jsonfile.readFileSync('./contacts.json');
  t.deepEqual(fileContent2, model.getAll());
});
