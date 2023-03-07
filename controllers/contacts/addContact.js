const { Contact } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
