const express = require("express");
const router = express.Router();
const { contactValidation } = require("../../middlewares");
const schemas = require("../../schemas");
const {
  getAllContacts,
  getContact,
  createContact,
  changeContact,
  deleteContact,
} = require("../../controllers");

router.get("/", getAllContacts);
router.get("/:contactId", getContact);
router.post("/", contactValidation(schemas.addSchema), createContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", contactValidation(schemas.addSchema), changeContact);
module.exports = router;
