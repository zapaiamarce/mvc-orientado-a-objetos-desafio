const fs = require('fs');
//IMPORTO DATA DEL JSON CON FS
let dataJson = JSON.parse(fs.readFileSync('contacts.json'))
class Contact {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  id: number = 0;
  name: string = "";

}

class ContactsCollection {
  data: Contact[] = [];
  constructor(data: Contact[] = []) {
    this.data = data;
  }

  load(): Contact[] {
    return this.data = dataJson;
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact: Contact) {
    console.log("AVER:", this.data)
    this.data.push({ id: contact.id, name: contact.name })
  }
  save(){
    const arrayParseado = JSON.stringify(this.data)
    fs.writeFileSync('contacts.json',arrayParseado)
  }
  getOneById(id:number){
    const encontrado =  this.data.find((element) => {
      if(element.id === id){
        return true
      }else { return false}
    } )
    return encontrado
  }
}

export { ContactsCollection , Contact };
