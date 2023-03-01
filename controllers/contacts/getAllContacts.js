const { Contact } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(contacts);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
