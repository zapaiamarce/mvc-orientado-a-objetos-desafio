// index.ts
import minimist from 'minimist';
import { ContactsController, ContactsControllerOptions } from './controllers';

type Action = 'load' | 'get' | 'save' | 'add' | 'getById';

function parseaParams(argv: string[]): ContactsControllerOptions {
  const args = minimist(argv);
  
  // Asegúrate de que `args.action` sea del tipo `Action` o `null`
  const action: Action | null = args.action ? args.action as Action : null;
  
  // Asegúrate de que `args.params` se maneje adecuadamente
  const params = args.params ? JSON.parse(args.params) : null;
  
  return {
    action,
    params,
  };
}

function main() {
  // Parsear los argumentos de línea de comandos
  const options = parseaParams(process.argv.slice(2));
  
  // Instanciar el controlador
  const controller = new ContactsController();

  // Verificar y procesar la acción
  switch (options.action) {
    case 'load':
      controller.load();
      console.log('Contacts loaded.');
      break;
    case 'get':
      console.log(controller.processOptions({ action: 'get', params: {} }));
      break;
    case 'save':
      controller.processOptions({ action: 'save', params: {} });
      console.log('Contacts saved.');
      break;
    case 'add':
      if (options.params && options.params.id && options.params.name && options.params.email && options.params.phone) {
        const contact = {
          id: options.params.id,
          name: options.params.name,
          email: options.params.email,
          phone: options.params.phone,
        };
        controller.addOne(contact);
        console.log('Contact added.');
      } else {
        console.log('Please provide all required fields (id, name, email, phone).');
      }
      break;
    case 'getById':
      if (options.params && options.params.id) {
        console.log(controller.getOneById(options.params.id));
      } else {
        console.log('Please provide an ID.');
      }
      break;
    default:
      console.log('Unknown action.');
  }
}

main();
