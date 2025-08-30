import minimist from "minimist"; // Importar minimist
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv: string[]): ContactsControllerOptions {
  const result = minimist(argv.slice(2)); // Ignorar los dos primeros argumentos (node y script)
  
  return {
    action: result['action'] || null, // Obtener la acción
    params: result['params'] ? JSON.parse(result['params']) : null, // Parsear los parámetros si existen
  };
}

function main() {
  const controladorContactos = new ContactsController();
  const options = parseaParams(process.argv); // Parsear los argumentos de la línea de comandos
  
  try {
    const result = controladorContactos.processOptions(options); // Pasar las opciones al controlador
    console.log(result); // Imprimir el resultado en la terminal
  } catch (error) {
    console.error('Error procesando las opciones:', error);
  }
}

main();
