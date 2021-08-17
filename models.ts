import * as jsonfile from "jsonfile";
import { fdatasync } from "node:fs";
import { findSourceMap } from "node:module";


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
data: Contact[] = []; //se pone el array vacio xq sino no corre bien el test
load(){
  const json = jsonfile.readFileSync("./contacts.json");
  this.data = json;}

getAll(){
return this.data;
}
addOne(contact:Contact){
  return this.data.push(contact);
}
save(){

  jsonfile.writeFileSync("./contacts.json", this.data);
}
getOneById(id){
const encontrado = this.data.find((item)=>{
  return item.id == id;
})
return encontrado;

}
  
}










export { ContactsCollection };
