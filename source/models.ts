// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from 'jsonfile';
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
   id: number = 0;
   name: string = "Juan" }

class ContactsCollection {
   data: Contact[] = [];
   constructor () {
     this.data }

   load() {
     let resultado: Contact[] = jsonfile.readFileSync(__dirname + "/contacts.json");
     this.data = resultado } 

   getAll(): Contact[] {
     return this.data }

   addOne(contacto: any) {
     this.data.push(contacto) }

   save() {
     jsonfile.writeFileSync(__dirname + "/contacts.json", this.data) }

   getOneById(id: number) {
     let aux: any;
     let dato: boolean = false;
     for(aux of this.data) {
       if ( aux.id == id ) {
         dato = true;
         return aux } 
     };
     if (dato == false) { return null }  }
}

export {ContactsCollection, Contact};