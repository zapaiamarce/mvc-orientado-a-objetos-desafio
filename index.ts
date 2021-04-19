  import { ContactsController, ContactsControllerOptions } from "./controllers";
  import * as minimist from "minimist"

  function parseaParams(argv: string []): ContactsControllerOptions {
 
  const resultado = minimist(argv)
  
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params) 
    };
}

function main() {
  const controller = new ContactsController ()
  const params  = parseaParams(process.argv.slice(2))
  const resultado = controller.processOptions(params)
  console.log(resultado)
}
main()
