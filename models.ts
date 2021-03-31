import { readFileSync } from "fs";
import { writeFileSync } from "jsonfile";

class Contact {
   id: number;
   name: string;
   // constructor(id?: number, name?: string) {
   //    this.id = id;
   //    this.name = name;
   // }
}

class ContactsCollection {
   data: Contact[];

   load() {
      this.data = JSON.parse(
         readFileSync(__dirname + "/contacts.json").toString()
      );
   }
   getAll() {
      return this.data;
   }
   addOne(contact: Contact) {
      if (this.data) {
         this.data.push(contact);
      } else {
         this.data = [contact];
      }
   }
   save() {
      writeFileSync(__dirname + "/contacts.json", this.data);
   }
   getOneById(id: number) {
      return this.data.find((e) => e.id == id);
   }
}
export { ContactsCollection, Contact };
