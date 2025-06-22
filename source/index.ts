import { ContactsController } from './controllers'; // Asegúrate de que la ruta sea correcta
import minimist from 'minimist';

async function main() {
  const controller = new ContactsController();
  
  // Inicializa el controlador y carga los contactos
  await controller.init();

  // Parsear los argumentos de la línea de comandos
  const args = minimist(process.argv.slice(2));
  
  // Aquí podrías definir qué acción tomar según los argumentos
  const options = {
    action: args.action, // 'get' o 'save'
    params: {
      id: args.id ? Number(args.id) : undefined,
      name: args.name // Solo para el caso de 'save'
    }
  };

  // Procesar las opciones
  const result = await controller.processOptions(options);
  console.log(result); // Imprimir el resultado en la terminal
}

main().catch(error => console.error(error));

