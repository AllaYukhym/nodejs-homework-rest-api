const { Contact } = require("../../models/contact");

const { HttpError, controllerWrapper } = require("../../helpers");

const deleteContact = async (req, res) => {
  const id = req.params.contactId;
  const deletedContact = await Contact.findByIdAndRemove(id);

  if (!deletedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  deleteContact: controllerWrapper(deleteContact),
};
