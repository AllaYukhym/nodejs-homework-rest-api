const { HttpError, controllerWrapper } = require("../helpers");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models");

const getAllContacts = async (req, res) => {
  const contacts = await listContacts();
  res.status(200).json(contacts);
};

const getContact = async (req, res) => {
  const id = req.params.contactId;
  const [contactById] = await getContactById(id);

  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

const createContact = async (req, res) => {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};

const changeContact = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await updateContact(id, req.body);

  if (!updatedContact) {
    throw HttpError(400, "Not found");
  }
  res.status(200).json(updatedContact);
};

const deleteContact = async (req, res) => {
  const id = req.params.contactId;
  const deletedContact = await removeContact(id);

  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

// const updateContactStatus = async (req, res) => {
//   const id = req.params.contactId;
//   const updatedContact = await updateContact(id, req.body);

//   if (!updatedContact) {
//     throw HttpError(400, "Not found");
//   }
//   res.status(200).json(updatedContact);
// };

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContact: controllerWrapper(getContact),
  createContact: controllerWrapper(createContact),
  changeContact: controllerWrapper(changeContact),
  deleteContact: controllerWrapper(deleteContact),
};
