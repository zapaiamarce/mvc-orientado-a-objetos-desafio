// este import existe solo para que tsc lo tome y lo copie a /build
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data : Contact[] = [];
  
  load(){
    const json = jsonfile.readFileSync("./source/contacts.json");
    this.data = json;
  }

  getAll(){
    return this.data
  }
  addOne(contact: Contact) {
    const exists = this.data.some(c => c.id === contact.id);  // agregue esta verificacion xq se estaban duplicando
    if (!exists) {
        this.data.push(contact);
    }
}

  save(){
    jsonfile.writeFileSync("./source/contacts.json", this.data); //me permite guardar colocando, la carpeta y obj que quiero guardar
  }
  getOneById(id:number){
    const encontrado = this.data.find((contacto) => contacto.id === id) ;
        return encontrado;
      }    
    
    };
    

export { ContactsCollection, Contact };
