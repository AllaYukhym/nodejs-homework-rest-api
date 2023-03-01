const { Contact } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const addContact = async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
