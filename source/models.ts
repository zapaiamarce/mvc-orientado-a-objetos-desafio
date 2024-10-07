// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
data : Contact []= [];

load (){
  const json = jsonfile.readFileSync(__dirname+"/contacts.json");
  
  this.data = this.data.concat(json)
  
return this.data
}

getAll(){
  return this.data
}
addOne(contact) {
   this.data.push(contact)
  
}
save () {
  jsonfile.writeFileSync(__dirname+"/contacts.json",this.data)
}
getOneById(id){
  const idEncontrado = this.data.find((contacto)=>contacto.id == id)
  console.log(idEncontrado)
  return idEncontrado
}
}

export { ContactsCollection, Contact };
