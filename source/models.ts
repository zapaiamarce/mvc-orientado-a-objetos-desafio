import * as fs from 'fs'
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayDeContactos: Contact[] = [];
  load(){
    const contactos = fs.readFileSync(__dirname + '/contacts.json').toString();
    const cont = JSON.parse(contactos);
    cont.forEach(element =>
      this.arrayDeContactos.push(element));
  }
  getAll(){
    return this.arrayDeContactos;
  }
  addOne(contact:Contact){
    this.arrayDeContactos.push(contact)
  }
  save(){
    let json = JSON.stringify(this.arrayDeContactos);
    fs.writeFileSync(__dirname + '/contacts.json',json);
  }
  getOneById(id:number){
    const contactoElegido = this.arrayDeContactos.find(c => c.id == id);
    return contactoElegido;
  }
}
export { ContactsCollection, Contact };
