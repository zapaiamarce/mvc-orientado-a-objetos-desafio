import test from 'ava';
import { ContactsController } from './controllers';
import * as jsonfile from 'jsonfile';
import { json } from 'stream/consumers';

test('Testeo el constructor del controller', (t) => {
  const controller = new ContactsController();
  controller.contacts.load();
  const data = controller.contacts.getAll();
  const json = jsonfile.readFileSync('./contacts.json');
  t.deepEqual(data, json);
});

test('Testeo el método processOptions', (t) => {
  const controller = new ContactsController();
  const optionsGet = controller.processOptions({
    action: 'get',
    params: {},
  });
  const optionsGetWithParams = controller.processOptions({
    action: 'get',
    params: { id: 1 },
  });
  const optionsSave = controller.processOptions({
    action: 'save',
    params: { id: 31, name: 'Marce' },
  });

  const data = jsonfile.readFileSync('./contacts.json');

  t.deepEqual(data, optionsGet);
  t.deepEqual(data[0], optionsGetWithParams);
  t.deepEqual(controller.contacts.save[1], optionsSave);
});
