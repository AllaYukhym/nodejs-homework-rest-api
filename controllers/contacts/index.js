const { getAllContacts } = require("./getAllContacts");
const { getContactById } = require("./getContactById");
const { addContact } = require("./addContact");
const { updateContactById } = require("./updateContactById");
const { deleteContact } = require("./deleteContact");
const { updateFavorite } = require("./updateFavorite");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContact,
  updateFavorite,
};
