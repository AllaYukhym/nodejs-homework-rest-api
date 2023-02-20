const express = require("express");
const router = express.Router();

const { contactValidation } = require("../../schemas");
const {
  getAllContacts,
  getContact,
  createContact,
  changeContact,
  deleteContact,
} = require("../../controllers");

router.get("/", getAllContacts);
router.get("/:contactId", getContact);
router.post("/", contactValidation, createContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", contactValidation, changeContact);
module.exports = router;
