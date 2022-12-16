import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  //la clase debe tener una propiedad interna 
//(se puede llamar como quieran) donde se guarde el array con la data
  data: Contact[] = [];

  //debe tener un método load() 
  //que cargue la info desde el contacts.json y la guarde en la data
  load(){
    const info = jsonfile.readFileSync(__dirname + "/contacts.json")
    this.data = info;
  }
  //getAll() debe devolver la collection completa
  getAll(){
    return this.data; 
   }
  //addOne(contact) {} debe agregar un contacto a la lista
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  //save debe escribir todo el objeto interno en el archivo contacts.json
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  //getOneById(id) debe devolver uno de los contactos por id
  getOneById(id:number) {
    return this.data.find((c)=> c.id == id);
  }
}



export { ContactsCollection };
