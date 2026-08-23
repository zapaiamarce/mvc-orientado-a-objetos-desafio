import test from "ava";
const contactosJson = require("./contacts.json");
import { ContactsController,ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
  const test1 = new ContactsController();
  const datos1 = contactosJson;

  t.deepEqual(test1.contacts.getAll(),datos1);

});

test("Testeo el método processOptions devolver Id", (t) => {

  const met = new ContactsController()
  const options:ContactsControllerOptions = {
    action: null,
    params: { id: 3},
  };

  const x =  met.processOptions(options);
  const y = contactosJson[2]
  t.is(x,y)
});

test("Testeo el método processOptions devolver todo", (t) => {

  const met = new ContactsController()
  const options:ContactsControllerOptions = {
    action: 'get',
    params: {},
  };

  const x =  met.processOptions(options);
  const y = contactosJson
  t.is(x,y)
});


test("Testeo el método processOptions guardar ", (t) => {

  const met = new ContactsController()
  const options:ContactsControllerOptions = {
    action: 'save',
    params: {id:900,name:'Mayra'},
  };

  const x =  met.processOptions(options);
  const y = contactosJson
  t.is(x,y)
});