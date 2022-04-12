import test from "ava";
import { ContactsController } from "./controllers";

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController();

    t.truthy(controller.contacts.__data.length);
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController();

    const tamanInicial = controller.contacts.__data.length;
    const listaGetAll = controller.processOptions({action:"get",params:undefined});

    t.is(tamanInicial, listaGetAll.length);
    
    var contactoParticular = controller.processOptions({action:"get",params:3});

    t.deepEqual([{id:3,name:"Mer"}],contactoParticular);

    controller.processOptions({action:"save",params:{id:123,name:"Prueba"}});
    controller.processOptions({action:"get",params:undefined});

    contactoParticular = controller.processOptions({action:"get",params:123});

    t.deepEqual([{id:123,name:"Prueba"}],contactoParticular);
});
