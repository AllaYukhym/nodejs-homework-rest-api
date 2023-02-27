const express = require("express");
const router = express.Router();
const { contactValidation } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares");

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", isValidId, ctrl.getContactById);
router.post("/", contactValidation(schemas.addSchema), ctrl.addContact);
router.delete("/:contactId", isValidId, ctrl.deleteContact);
router.put(
  "/:contactId",
  isValidId,
  contactValidation(schemas.addSchema),
  ctrl.updateContactById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  contactValidation(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
