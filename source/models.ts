import * as jsonfile from 'jsonfile';

class Contact {
	id: number = 0;
	name: string = '';
}

class ContactsCollection {
	data: Contact[] = [];

	/* 	constructor(data: Contact[]) {
		this.data = data;
	} */

	load() {
		const contactos = jsonfile.readFileSync(__dirname + '/contacts.json');
		this.data = contactos;
	}

	getAll(): Contact[] {
		return this.data;
	}

	addOne(contact: Contact) {
		this.data.push(contact);
	}

	save() {
		jsonfile.writeFileSync(__dirname + '/contacts.json', this.data);
	}

	getOneById(id: number) {
		return this.data.find((c) => c.id === id);
	}
}

function main() {
	const prueba = new ContactsCollection();
	// console.log(prueba.load());
}
// main();

export { ContactsCollection };
