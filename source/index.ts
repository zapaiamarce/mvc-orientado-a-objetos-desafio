import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));

function parseaParams(
  argv,
  controller: ContactsController
): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist

  const id = Number(argv.id);
  if (argv.action === "get" && !isNaN(id)) {
    console.log("Obteniendo contacto con ID:", id);
    return {
      action: argv.action,
      params: { id: id },
    };
  } else if (argv.action === "save" && typeof argv.name === "string") {
    console.log(
      "El contacto:",
      argv.name,
      "ha sido guardado en la base de datos"
    );
    return {
      action: argv.action,
      params: { id: controller.contacts.data.length + 1, name: argv.name },
    };
  } else {
    console.log(`Opcion 1: --action=get --id=(numero de id)`);
    console.log(`Opcion 2: --action=save --name="nombre de usuario nuevo"`);
    return {
      action: null,
      params: null,
    };
  }
}

function main() {
  const controller = new ContactsController();
  const input = parseaParams(argv, controller);
  const answer = controller.processOptions(input);
  console.log(answer);
}

main();
