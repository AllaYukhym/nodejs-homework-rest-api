const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers/HttpError");
const { ctrlWrapper } = require("../../helpers/ctrlWrapper");

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
  updateFavorite: ctrlWrapper(updateFavorite),
};
