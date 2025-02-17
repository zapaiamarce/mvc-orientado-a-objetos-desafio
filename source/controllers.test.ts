import test from "ava";
import { ContactsController } from "./controllers";
import "./contacts.json";
import * as jsonfile from "jsonfile"

test("Testeo el constructor del controller", (t) => {
  
  const controladorDePrueba =  new ContactsController(); //en este momento nuevoControlador ya tiene cargardo el json
  //importo el json y comparo
  const contactos = jsonfile.readFileSync(__dirname + "/contacts.json")
  //antes extraigo la collection del controlador para comparar collections y no al objeto completo
  const contactosDelControlador = controladorDePrueba.contacts.contactos;

  t.deepEqual(contactosDelControlador, contactos);
});


test("Testeo la búsqueda de un contacto", (t) => {
  const controlador = new ContactsController();
  const contacto = controlador.processOptions({ action: 'get', params: { id: 1 } });
  
  t.deepEqual(contacto, { id: 1, name: 'Ana' }); // Ajusta según el contacto esperado
});

test("Testeo la búsqueda de todos los contactos", (t) => {
  const controlador = new ContactsController();
  const contactos = controlador.processOptions({ action: 'get', params: ""});
  
  const contactosEsperados = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(contactos, contactosEsperados);
});

test("Testeo la grabación de un nuevo contacto", (t) => {
  const controlador = new ContactsController();
  const nuevoContacto = { id: 7, name: 'Nuevo Contacto' };
  
  controlador.processOptions({ action: 'save', params: nuevoContacto });
  const contactosActualizados = controlador.processOptions({ action: 'get', params: ""});
  
  t.true(contactosActualizados.some(contacto => contacto.id === 7 && contacto.name === 'Nuevo Contacto'));
});

