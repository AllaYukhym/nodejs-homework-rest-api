const { HttpError, controllerWrapper } = require("../helpers");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models");

const getAllContacts = async (req, res) => {
  // try {
  const contacts = await listContacts();
  res.status(200).json(contacts);
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
};

const getContact = async (req, res) => {
  // try {
  const id = req.params.contactId;
  const [contactById] = await getContactById(id);

  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
};

const createContact = async (req, res) => {
  // try {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
};

const changeContact = async (req, res) => {
  // try {
  const id = req.params.contactId;
  const updatedContact = await updateContact(id, req.body);

  if (!updatedContact) {
    throw HttpError(400, "Not found");
  }
  res.status(200).json(updatedContact);
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
};

const deleteContact = async (req, res) => {
  // try {
  const id = req.params.contactId;
  const deletedContact = await removeContact(id);

  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
  // } catch (error) {
  //   res.status(500).json({ message: "Server error" });
  // }
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContact: controllerWrapper(getContact),
  createContact: controllerWrapper(createContact),
  changeContact: controllerWrapper(changeContact),
  deleteContact: controllerWrapper(deleteContact),
};
