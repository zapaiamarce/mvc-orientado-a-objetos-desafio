import * as minimist from 'minimist';
import { ContactsController, ContactsControllerOptions } from './controllers';

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  // ej: ts-node index.ts --action get --params '{""id"": 1}'
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const contactController = new ContactsController();
  const argumentos = parseaParams(process.argv.slice(2));
  const resultado = contactController.processOptions(argumentos);
  console.log(resultado);
}

main();
