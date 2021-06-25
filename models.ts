import * as jsonfile from "jsonfile";
import * as  contactsObject from "./contacts.json";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = []; 
load(){
  const constJson = jsonfile.readFileSync("./contacts.json");
  this.data = constJson;
}
getAll(){
  return this.data;
}
addOne(contact: Contact){
  return this.data.push(contact);
}
save(){
  jsonfile.writeFileSync("./contacts.json", this.data);
}
getOneById(id){
  const IdEncontrado = this.data.find((contacto)=>{
    if(contacto.id == id){
    return true;
  }
});
return IdEncontrado;
 }
}
 
export { ContactsCollection, Contact };
