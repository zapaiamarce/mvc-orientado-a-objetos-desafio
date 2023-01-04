import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const parsedArgs = minimist(argv);
  /* let params: any = undefined;

  console.log(parsedArgs);

  //esto estaba pensado para una forma de pasar args
  /*
  if (parsedArgs.a == "save") {
    params = { id: parsedArgs._[0], name: parsedArgs._[2] };
  } else if (parsedArgs.a == "get") {
    params = parsedArgs.p;
  }
  if (params === true) {
    params = undefined;
  }*/

  return {
    action: parsedArgs.action,
    params: JSON.parse(parsedArgs.params),
  };
}

function main() {
  const controlador = new ContactsController();
  const respuesta = controlador.processOptions(
    parseaParams(process.argv.slice(2))
  );

  console.log(respuesta);
}

main();
