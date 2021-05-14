import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as json from "jsonfile"



test("Testeo el constructor del controller", (t) => {
    const model  = new ContactsController()
    const mockContact = {
        id: 31,
        name: "marce"
    }

   

    const file = json.readFileSync(__dirname +"/contacts.json")
    t.deepEqual(file,model.contacts.info)
    

});

 
test("Testeo el método processOptions", (t) => {
    const prueba = new ContactsController()
    const archivo = json.readFileSync(__dirname + "/contacts.json")
    const contacto = new ContactsControllerOptions()
    contacto.action = "get",
    contacto.params = ""
    
    


   t.deepEqual(prueba.processOptions(contacto),archivo)
})

