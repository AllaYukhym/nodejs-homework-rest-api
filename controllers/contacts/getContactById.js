const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers/HttpError");
const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

const getContactById = async (req, res) => {
  const id = req.params.contactId;
  const contactById = await Contact.findById(id, "-createdAt -updatedAt");

  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(contactById);
};

module.exports = {
  getContactById: ctrlWrapper(getContactById),
};
