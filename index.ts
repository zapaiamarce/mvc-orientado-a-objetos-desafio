import { ContactsController, ContactsControllerOptions } from './controllers';

function parseaParams(argv): ContactsControllerOptions {
    // parsear el argv usando https://www.npmjs.com/package/minimist
    const parametro = require('minimist')(argv);
    return {
        action: parametro.a,
        params: parametro.p,
    };
}

function main() {
    const controllerContacts = new ContactsController();
    const rta = controllerContacts.processOptions(
        parseaParams(process.argv.slice(2))
    );
    console.log(rta);
}

main();
