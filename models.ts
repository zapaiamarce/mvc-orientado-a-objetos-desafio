import * as jsonfile from 'jsonfile';

class Contact {
	id: number;
	name: string;
}

class ContactsCollection {
	data: Contact[] = [];

	load() {
		const datos = jsonfile.readFileSync('./contacts.json');
		this.data = datos;
	}
	getAll() {
		return this.data;
	}
	addOne(contact: Contact) {
		this.data.push(contact);
	}
	save() {
		jsonfile.writeFileSync('./contacts.json', this.data);
	}
	getOneById(id: number) {
		return this.data.find((contacto) => contacto['id'] === id);
	}
}

export { ContactsCollection };
