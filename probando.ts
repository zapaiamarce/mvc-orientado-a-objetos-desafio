import { ContactsCollection } from "./models"
import { ContactsControllerOptions, ContactsController } from "./controllers";

const controlador = new ContactsController();


console.log("Get vacio");
const resultado = controlador.processOptions({action: "get", params:""});
//console.log(controlador.processOptions({action: "get", params:""}));
console.log(JSON.stringify(resultado,null,2));


// console.log("Get con valor")
// console.log(controlador.processOptions({action: "get", params:2}));