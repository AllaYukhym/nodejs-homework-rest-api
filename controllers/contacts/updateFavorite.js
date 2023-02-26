const { Contact } = require("../../models/contact");

const { HttpError, controllerWrapper } = require("../../helpers");

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
  updateFavorite: controllerWrapper(updateFavorite),
};
