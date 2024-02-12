import * as jsonfile from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  collection : Contact[] = [];
  path : string = __dirname + '/contacts.json';

  load(): void {
    const data = jsonfile.readFileSync(this.path);
    data.forEach((element: Contact) => {
      this.collection.push(element)
    });
  };

  getAll(): Contact[] {
    return this.collection;
  };

  addOne(contact: Contact): void {
    this.collection.push(contact);
  };

  save():void {
    jsonfile.writeFileSync(this.path, this.collection);
  };

  getOneById(id: number): Contact|void {
    const contact = this.collection.find((element: Contact) => {
      return element.id === id;
    });
    if(!contact){
      return console.log('No existe una entrada con el Id que ingresaste');
    };
    return contact;
  };

};

export { ContactsCollection };
