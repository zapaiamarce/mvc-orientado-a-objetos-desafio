// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {

  data: any[];
  constructor() {
    this.data = [];
  }

  public load(){
    const fs = require('fs');
    const data = fs.readFileSync('contacts.json', 'utf8');
    this.data = JSON.parse(data);
  } 

  public getAll(){
    return this.data;
  }

  public addOne(contact){
    const exist= this.data.some(c=> c.id === contact.id);
    if(!exist){
      this.data.push(contact);
    }else{
      console.log(`El contacto con id ${contact.id} ya existe`);
    }
   
  }

  public save(){
    const fs= require('fs');
    fs.writeFileSync('contacts.json', JSON.stringify(this.data,null,2));
  }

  public getOneById(id){
    return this.data.find(contact => contact.id=== id);
  }
}
export { ContactsCollection };
