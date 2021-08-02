import * as jsonfile from "jsonfile";

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    collectionContacts: Contact[] = [];
    load(){
        this.collectionContacts = jsonfile.readFileSync(__dirname + "/contacts.json");
    }
    getAll(){
        return this.collectionContacts; 
    }
    addOne(contact){
        this.collectionContacts.push(contact);
    }
    save(){
        jsonfile.writeFileSync("contacts.json", this.collectionContacts);
    }
    getOneById(id: number){
        return this.collectionContacts.find(item => item.id == id);
    }
}

export { ContactsCollection };
