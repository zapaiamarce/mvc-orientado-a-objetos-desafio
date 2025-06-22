import * as jsonfile from 'jsonfile';
import * as path from 'path';

class Contact {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  private filePath: string;
  private contacts: Contact[] = []; // Cache for loaded contacts

  constructor() {
    this.filePath = path.resolve(__dirname, 'contacts.json');
  }

  /**
   * Loads contacts from the JSON file into the collection's memory.
   * This method should be called before performing operations like getOneById, etc.
   * @returns A Promise that resolves when the contacts are loaded.
   */
  async load(): Promise<void> {
    try {
      const data = await jsonfile.readFile(this.filePath);
      this.contacts = Array.isArray(data) ? data.map((item: any) => new Contact(item.id, item.name)) : [];
      console.log("Contacts loaded successfully.");
    } catch (error: any) {
      // If the file doesn't exist, we'll start with an empty array
      if (error.code === 'ENOENT') {
        console.warn("contacts.json not found. Starting with an empty contact list.");
        this.contacts = [];
      } else {
        console.error("Error loading contacts file:", error);
        throw error; // Re-throw other errors
      }
    }
  }

  /**
   * Saves the current state of the contacts in memory back to the JSON file.
   * This should be called after any modification (add, update, delete).
   * @returns A Promise that resolves when the contacts are saved.
   */
  async save(): Promise<void> {
    try {
      await jsonfile.writeFile(this.filePath, this.contacts, { spaces: 2 });
      console.log("Contacts saved successfully.");
    } catch (error) {
      console.error("Error saving contacts file:", error);
      throw error;
    }
  }

  /**
   * Retrieves a single contact by its ID.
   * It assumes `load()` has already been called.
   * @param id The ID of the contact to retrieve.
   * @returns The Contact object if found, otherwise undefined.
   */
  getOneById(id: number): Contact | undefined {
    // We work with the in-memory 'contacts' array after it has been loaded
    return this.contacts.find(contact => contact.id === id);
  }

  /**
   * Adds a new contact to the collection and saves the changes.
   * This method now uses the in-memory array and then calls save().
   * @param newContact The contact object to add.
   * @returns A Promise that resolves when the contact is added and saved.
   */
  async addContact(newContact: Contact): Promise<void> {
    // Assign a new ID if not provided, or ensure it's unique
    if (!newContact.id) {
        newContact.id = this.generateNewId();
    } else if (this.contacts.some(c => c.id === newContact.id)) {
        console.warn(`Contact with ID ${newContact.id} already exists. Assigning a new ID.`);
        newContact.id = this.generateNewId();
    }
    this.contacts.push(newContact);
    await this.save(); // Save changes to the file
  }

  /**
   * Returns all contacts currently loaded in memory.
   * It assumes `load()` has already been called.
   * @returns An array of Contact objects.
   */
  getAllContacts(): Contact[] {
    // Now this just returns the in-memory array
    return [...this.contacts]; // Return a copy to prevent external modification
  }

  /**
   * Updates an existing contact by ID.
   * It assumes `load()` has already been called.
   * @param id The ID of the contact to update.
   * @param updates An object containing the properties to update.
   * @returns A Promise that resolves when the contact is updated and saved.
   * @throws Error if contact is not found.
   */
  async updateContact(id: number, updates: Partial<Contact>): Promise<void> {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
      throw new Error(`Contact with ID ${id} not found.`);
    }
    this.contacts[index] = { ...this.contacts[index], ...updates };
    await this.save(); // Save changes to the file
  }

  /**
   * Deletes a contact by its ID.
   * It assumes `load()` has already been called.
   * @param id The ID of the contact to delete.
   * @returns A Promise that resolves when the contact is deleted and saved.
   * @throws Error if contact is not found.
   */
  async deleteContact(id: number): Promise<void> {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    if (this.contacts.length === initialLength) {
      throw new Error(`Contact with ID ${id} not found.`);
    }
    await this.save(); // Save changes to the file
  }

  /**
   * Generates a unique ID for a new contact.
   * @returns A new unique ID.
   */
  private generateNewId(): number {
    const maxId = this.contacts.reduce((max, contact) => Math.max(max, contact.id), 0);
    return maxId + 1;
  }
}

export { ContactsCollection, Contact };
