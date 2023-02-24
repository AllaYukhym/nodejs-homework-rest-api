const { Contact } = require("../models/contact");

const { HttpError, controllerWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(contacts);
};

const getContact = async (req, res) => {
  const id = req.params.contactId;
  const contactById = await Contact.findById(id);

  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

const createContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

const changeContact = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedContact) {
    throw HttpError(400, "Not found");
  }
  res.status(200).json(updatedContact);
};

const deleteContact = async (req, res) => {
  const id = req.params.contactId;
  const deletedContact = await Contact.findByIdAndRemove(id);

  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const updateFavorite = async (req, res) => {
  const id = req.params.contactId;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedContact) {
    throw HttpError(400, "Not found");
  }
  res.status(200).json(updatedContact);
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getContact: controllerWrapper(getContact),
  createContact: controllerWrapper(createContact),
  changeContact: controllerWrapper(changeContact),
  deleteContact: controllerWrapper(deleteContact),
  updateFavorite: controllerWrapper(updateFavorite),
};
