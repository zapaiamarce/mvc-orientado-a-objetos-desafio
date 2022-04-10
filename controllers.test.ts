import test from "ava";
import { ContactsController } from "./controllers";
import { readFileSync } from "fs";

test("Testeo el constructor del controller", (t) => {
    const controller = new ContactsController()

    const data = JSON.parse(readFileSync(__dirname + '/contacts.json').toString())

    t.is(controller.contacts.data.length, data.length)
    t.is(controller.contacts.data.find(e => e.id == 1).name, 'Ana')
    t.is(controller.contacts.data.find(e => e.id == 4).name, 'Dana')
});

test("Testeo el método processOptions", (t) => {
    const controller = new ContactsController()

    const primerContacto = controller.processOptions(
        {
            action: 'get',
            params: { id: 1 }
        }
    )
    const todosLosContactos = controller.processOptions({
        action: 'get', params: {}
    })
    const guardado = controller.processOptions(
        {
            action: 'save',
            params: { id: 10, name: 'Jae' },

        }
    )
    t.deepEqual(primerContacto, { id: 1, name: 'Ana' })
    t.deepEqual(todosLosContactos[1], { id: 2, name: 'Paula' })
    t.truthy(controller.contacts.data.length > 4)

});
