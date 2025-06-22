import { ContactsCollection, Contact } from "./models"; // Ensure the path is "./model" if your models.ts is named model.ts

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: {
    id?: number; // Optional ID for 'get' action, and for 'save' if updating/providing an ID
    name?: string; // Required for 'save' action
    [key: string]: any; // Allows for other potential parameters
  };
};

class ContactsController {
  private contactsCollection: ContactsCollection;

  constructor() {
    this.contactsCollection = new ContactsCollection();
  }

  /**
   * Initializes the controller by loading contacts from the file.
   * This should be called after instantiating ContactsController.
   */
  async init(): Promise<void> {
    await this.contactsCollection.load();
    console.log("ContactsController initialized and data loaded.");
  }

  /**
   * Processes options to interact with the ContactsCollection model.
   * @param options An object of type ContactsControllerOptions.
   * @returns A Promise that resolves with the result of the action (e.g., Contact[], Contact, or void).
   * @throws Error if action is not valid or data is missing/invalid.
   */
  async processOptions(options: ContactsControllerOptions): Promise<Contact[] | Contact | void> {
    const { action, params } = options;

    if (action === "get") {
      if (typeof params.id === "number") { // Check specifically for 'id' being a number
        const contact = this.contactsCollection.getOneById(params.id);
        if (!contact) {
          console.warn(`Contact with ID ${params.id} not found.`);
        }
        return contact;
      } else {
        return this.contactsCollection.getAllContacts();
      }
    } else if (action === "save") {
      // Validate that params exists and has a 'name'
      if (!params || typeof params.name !== 'string' || params.name.trim() === '') {
        console.error("Save action requires valid 'name' in params.");
        throw new Error("Missing or invalid 'name' for save action.");
      }

      // Handle ID: If params.id is provided and valid, use it; otherwise, let the model generate one.
      const id = typeof params.id === 'number' && !isNaN(params.id) ? params.id : 0;
      const newContact = new Contact(id, params.name);

      await this.contactsCollection.addContact(newContact);
      console.log("Contact saved successfully via controller.");
      return; // Return void for save actions that just modify data
    } else {
      console.warn("No valid action specified or action not supported.");
      return; // Or throw an error for unsupported actions
    }
  }
}

export { ContactsController };

