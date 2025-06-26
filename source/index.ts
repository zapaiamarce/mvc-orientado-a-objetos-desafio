import { ContactsController, ContactsControllerOptions } from "./controllers";
var argv = require("minimist")(process.argv.slice(2));

function parseaParams(argv): ContactsControllerOptions {
  const parsedJson = JSON.parse(argv.params);

  return {
    action: argv.action,
    params: parsedJson,
  };
}

function main() {
  const options = parseaParams(argv);
  const contactsCntrll = new ContactsController();
  const res = contactsCntrll.processOptions(options);
  console.log("Resultado de process options via terminal : ", res);

  return res;
}

main();
