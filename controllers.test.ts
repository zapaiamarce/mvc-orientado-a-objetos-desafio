import test from "ava";
import * as jsonfile from 'jsonfile';
import { ContactsController , ContactsControllerOptions } from "./controllers";

test("Testeo el constructor del controller", (t) => {
const controler = new ContactsController();
const datos = jsonfile.readFileSync("./contacts.json"); 
t.deepEqual(controler.contacts.dataBase,datos);
});

test("Testeo el método processOptions", (t) => {
const controlador  = new ContactsController();
const opciones = new ContactsControllerOptions();

opciones.action = "get";
opciones.params = 2;
const result = controlador.processOptions(opciones);

const json = jsonfile.readFileSync("./contacts.json");
const compare = json.find( r => r.id == 2 );
t.deepEqual(compare,result);
});