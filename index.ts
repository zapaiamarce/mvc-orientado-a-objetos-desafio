import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from 'minimist';
function parseaParams(argv): ContactsControllerOptions {
  
   const result = minimist(argv);
      if(typeof result.params =="undefined"){
        return {
          action: result.action,
          params: ""
          };
      }else{
        return{ 
        action: result.action,
        params: JSON.parse(result.params)
        }
       }
  }
  
  function main() {
    
   const parametros = process.argv.slice(2) ;
   const controllParam = parseaParams(parametros);
   const flujo = new ContactsController()
   const result = flujo.processOptions(controllParam);
   console.log(result);
  }

main();
