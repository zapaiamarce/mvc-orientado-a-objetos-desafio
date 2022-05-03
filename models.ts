import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
cosa:Contact[]=[]

load(){
  const datos= jsonfile.readFileSync("./contacts.json");
this.cosa= datos;
};

getAll(){
  return this.cosa
};

addOne(contac:Contact){
this.cosa.push(contac);
};

save(){

  const archivo = jsonfile.writeFileSync("./contacts.json",this.cosa);

};
getOneById(ids){
  const encontrado= this.cosa.find((x)=>{ if (x.id==ids){
    return true}});
    return encontrado
}
};
export { ContactsCollection };
