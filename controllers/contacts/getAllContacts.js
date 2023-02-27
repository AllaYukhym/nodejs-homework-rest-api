const { Contact } = require("../../models/contact");

const { controllerWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.status(200).json(contacts);
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
};
