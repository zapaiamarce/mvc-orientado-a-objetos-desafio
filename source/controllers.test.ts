import test from "ava";
import * as minimist from "minimist"
import { ContactsController,ContactsControllerOptions } from "./controllers";
import { Contact, ContactsCollection } from "./models";
test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  const controll = new ContactsController();
  const contactos = new ContactsCollection();

  contactos.load()
 
  t.deepEqual(controll.contacts ,contactos)
 });

 test("processOptions() - Obtener todos los contactos", (t) => {
  const controller = new ContactsController();

  // Simula una lista de contactos en la base de datos
  const mockData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  // Mock del método getAll para devolver los contactos simulados
  controller.contacts.getAll = () => mockData;

  // Define las opciones correctamente con el tipo de action "get"
  const options: ContactsControllerOptions = { action: "get", params: {} as Contact };

  // Llama a processOptions con la acción "get"
  const result = controller.processOptions(options);
  
  // Verifica que el resultado coincida con los datos simulados
  t.deepEqual(result, mockData, "Debe devolver todos los contactos");
});

test("processOptions() - Obtener un contacto por ID", (t) => {
  const controller = new ContactsController();

  // Contacto simulado con ID 1
  const mockContact = { id: 1, name: "Alice" };

  // Mock del método getOneById para devolver el contacto con ID 1
  controller.contacts.getOneById = (id: number) : any => {
    if(id == 1){
      return mockContact
    }else{
      return null;
    }
  };

  // Define las opciones para obtener el contacto por ID con el tipo correcto
  const options: ContactsControllerOptions = { action: "get", params: { id: 1 } as Contact };

  // Llama a processOptions con la acción "get" y el ID
  const result = controller.processOptions(options);

  // Verifica que el resultado sea el contacto correcto
  t.deepEqual(result, mockContact, "Debe devolver el contacto con ID 1");
});

test("processOptions() - Guardar un nuevo contacto", (t) => {
  const controller = new ContactsController();

  const newContact = { id: 3, name: "Charlie" };

  // Mock de los métodos addOne y save
  controller.contacts.addOne = (contact: Contact) => {
    t.deepEqual(contact, newContact, "Debe añadir el contacto correctamente");
  };

  controller.contacts.save = () => {
    t.pass();  // Verifica que el método save se haya llamado
  };

  // Define las opciones para guardar el nuevo contacto con el tipo correcto
  const options: ContactsControllerOptions = { action: "save", params: newContact} ;

  // Llama a processOptions con la acción "save"
  const result = controller.processOptions(options);
  console.log(result , "necesito saberloooooo")
  // Verifica que se devuelva un objeto indicando éxito
  t.deepEqual(result, { success: true, savedContact: newContact });
  
});

//  test("Testeo el método processOptions(debe conseguir un Id)", (t) => {


//  });
