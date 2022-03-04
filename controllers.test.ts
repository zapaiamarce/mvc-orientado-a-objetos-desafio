import test from "ava";
import * as atencion from "./controllers";
import * as jsonfile from "jsonfile"




test("Testeo el constructor del controller", (t) => {
     const prueba = new atencion.ContactsController()
     const ejemploMock = {
         id: 75,
         name: "suset"
     }
     prueba.contacts.addOne(ejemploMock);
     prueba.contacts.save();
     const comparativo = jsonfile.readFileSync("./contacts.json")
     t.deepEqual(prueba.contacts.getAll(),comparativo)
 });

 test("Testeo el método processOptions", (t) => {
     const otroElemPrueba = new atencion.ContactsController()
     const datosMock = {
         id: 10,
         name : "lolo"
     }
     otroElemPrueba.contacts.addOne(datosMock)
     //otroElemPrueba.contacts.save()
     const otroResultao = otroElemPrueba.contacts.getOneById(10)     
     
     const parametros:atencion.ContactsControllerOptions =
     {
        action: "get",
         params: {id: 10}
     }
        const resutao = otroElemPrueba.processOptions(parametros)
        
     t.deepEqual(resutao,otroResultao)
 });
