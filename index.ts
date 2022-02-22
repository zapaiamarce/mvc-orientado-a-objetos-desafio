import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  var minimist = require('minimist')
  var opt = minimist(argv)
  return {
    action: opt.action,
    params: opt.params,
  };
}

function main() {
  const comandos = parseaParams(process.argv.slice(2))
  const instance = new ContactsController()
  const res = instance.processOptions(comandos)

  console.log(res)
}

main();
