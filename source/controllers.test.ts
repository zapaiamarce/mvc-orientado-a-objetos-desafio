import test from "ava";
import { ContactsController } from "./controllers";
import { ContactsCollection } from "./models";
import { Contact } from "./models";
import * as fs from "fs";

test("Testeo el constructor del controller", (t) => {
  const controlador = new ContactsController;
  
  const contactos = fs.readFileSync(__dirname + '/contacts.json').toString();
  const cont = JSON.parse(contactos);
  t.deepEqual(controlador.contacts.arrayDeContactos, cont);
});

test("Testeo el método processOptionsSave", (t) => {
  const pedro = new Contact();
  pedro.id = 7;
  pedro.name = "pedro";
  const controlador = new ContactsController;
  controlador.processOptions({action:"save",params: pedro});
  t.deepEqual(controlador.contacts.getOneById(7), pedro);
});
test("Testeo el método processOptionsGet", (t) => { 
  const controlador = new ContactsController;
  controlador.contacts.load;
  t.deepEqual(controlador.processOptions({action:"get",params: 1}), {"id": 1,"name": "Ana"});
});