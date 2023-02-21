const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts;
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    let contactById = [];

    if (typeof Number(id) === "number") {
      contactById = contacts.filter(
        (contact) => Number(contact.id) === Number(id)
      );
    }

    if (typeof id === "string") {
      contactById = contacts.filter((contact) => contact.id === id);
    }
    return contactById;
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), ...body };
    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    let index = "";

    if (typeof Number(id) === "number") {
      index = contacts.findIndex(
        (contact) => Number(contact.id) === Number(id)
      );
    }

    if (typeof id === "string") {
      index = contacts.findIndex((contact) => contact.id === id);
    }

    if (index === -1) {
      return null;
    }
    const [deletedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return deletedContact;
  } catch (error) {
    console.error(error);
  }
};

const updateContact = async (id, body) => {
  try {
    const contacts = await listContacts();
    let index = "";

    if (typeof Number(id) === "number") {
      index = contacts.findIndex(
        (contact) => Number(contact.id) === Number(id)
      );
    }

    if (typeof id === "string") {
      index = contacts.findIndex((contact) => contact.id === id);
    }

    if (index === -1) {
      return null;
    }
    contacts[index] = { id, ...body };
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
