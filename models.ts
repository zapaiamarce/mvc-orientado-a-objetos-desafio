import * as jsonFile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
 data: Contact[] = []
  load(){
   var archivo = jsonFile.readFileSync("./contacts.json")
   this.data = archivo;
 }
 getAll(){
   return this.data
 }
 addOne(contact:Contact) {
   this.data.push(contact)
 }
 save(){
  jsonFile.writeFileSync("./contacts.json",this.data)
}
 getOneById(id){
   return this.data.find(function(contactos){return contactos.id === id})
 }
}
export { ContactsCollection };
