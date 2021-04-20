import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as fs from "fs"

test("Testeo el constructor del controller", (t) => {
    const contactosArchivo = fs.readFileSync("./contacts.json").toString()
    const contactosParseados = JSON.parse(contactosArchivo)
    const contacts = new ContactsController()
    t.deepEqual(contacts.contacts.contactos,contactosParseados)
});

 test("Testeo el método processOptions: action get y params id", (t) => {
     
     const mockController = new ContactsController()
     const mockOptions = new ContactsControllerOptions()
     const mockContact = {id: 5, name:"mock"}

     //testea el caso de "get" con valor id en options.params
     mockOptions.action = "get"
     mockOptions.params = {id: 5}
     mockController.contacts.addOne(mockContact)
     const resultado = mockController.processOptions(mockOptions)
     t.is(resultado,mockContact)
 });
 
 test("Testeo el método processOptions: action get y params vacio", (t) => {
     
    const mockController = new ContactsController()
    const mockOptions = new ContactsControllerOptions()
    
    mockOptions.action = "get"
    mockOptions.params = {}
     const todosLosContactos = mockController.contacts.getAll()
     const resultadoDos = mockController.processOptions(mockOptions)
     t.is(resultadoDos, todosLosContactos)
});
 test("Testeo el método processOptions: action save", (t) => {
     
    const mockController = new ContactsController()
    const mockOptions = new ContactsControllerOptions()
     
    mockOptions.action = "save"
    mockOptions.params = {
        id: 50,
        nombre:"Mock"
    }
     mockController.processOptions(mockOptions)
     const contactoAgregado = mockController.contacts.getOneById(50)
     t.deepEqual(contactoAgregado,mockOptions.params)
     
});
 