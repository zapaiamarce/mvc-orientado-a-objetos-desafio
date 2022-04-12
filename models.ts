import { readFileSync, writeFileSync } from 'fs'

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  constructor(){this.__data = [];};

  load() {
    try{
      const lectura = readFileSync(__dirname + '/contacts.json');

      this.__data = JSON.parse(lectura.toString());
    }
    catch (err){
      throw err;
    }
  };

  getAll(){
    return this.__data;
  };

  addOne(contact){
      this.__data.push(contact);
  };

  save(){
    try{
      writeFileSync(__dirname + '/contacts.json', JSON.stringify(this.__data,null,2));
    }
    catch(err){
      throw err;
    }
  };

  getOneById(id:number){
    return this.__data.find((item:Contact) => {
      return item["id"] == id;
    });
  }

  __data: Contact[];
}

export { ContactsCollection };
