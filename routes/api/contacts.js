const express = require("express");
const router = express.Router();
const { contactValidation } = require("../../middlewares");
const schemas = require("../../schemas");
const ctrl = require("../../controllers");

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", ctrl.getContact);
router.post("/", contactValidation(schemas.addSchema), ctrl.createContact);
router.delete("/:contactId", ctrl.deleteContact);
router.put(
  "/:contactId",
  contactValidation(schemas.addSchema),
  ctrl.changeContact
);
module.exports = router;
