import * as jsonfile from "jsonfile"; 

class Contact {
  id: number;
  name: string;
}
//- dentro del módulo **models.ts** crear y exportar la clase **ContactsCollection**

//  - la clase debe tener una propiedad interna (se puede llamar como quieran) donde se guarde el array con la data
//  - debe tener un método **load()** que cargue la info desde el contacts.json y guardarla en **data**
//  - getAll() debe devolverme la collection completa
//  - addOne(contact) {} debe agregar un contacto a la lista
//  - save debe escribir todo el objeto interno en el archivo **contacts.json**
//  - getOneById(id) debe devolver uno de los contactos por id

class ContactsCollection {
data:Contact[]=[];
load(){
  const json = jsonfile.readFileSync("./contacts.json");
  return this.data=json;
}
getAll(){
  return this.data
}
addOne(contact:Contact){
return this.data.push(contact);
}
save(){
  return jsonfile.writeFileSync("./contacts.json",this.data);
}
getOneById(id){
  const contactoEncontrado=this.data.find(function(contacto){
    if(contacto.id == id){
      return true;
    }
  });
  return contactoEncontrado; 
  };
getOneByName(name){
  const contactoEncontrado=this.data.find(function(contacto){
    if(contacto.name==name){
      return true;
    }
  });
  return contactoEncontrado;
};

}

export { ContactsCollection,Contact };
