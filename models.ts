import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  dataList: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.dataList = json;
  }
  getAll() {
    return this.dataList;
  }
  addOne(contact: Contact) {
    this.dataList.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.dataList);
  }
  getOneById(id: number): Contact {
    return this.dataList.find((contact) => {
      if (contact.id == id) return contact;
    });
  }
}
export { ContactsCollection };
// Resolver una promise:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* const json = jsonfile.readFile("./contacts.json");

console.log(
  json.then((res) =>
    res.forEach((element) => {
      console.table(element);
    })
  )
);
 */
