const express = require("express");
const router = express.Router();
const { contactValidation } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers");
const { isValidId } = require("../../middlewares");

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", isValidId, ctrl.getContact);
router.post("/", contactValidation(schemas.addSchema), ctrl.createContact);
router.delete("/:contactId", isValidId, ctrl.deleteContact);
router.put(
  "/:contactId",
  isValidId,
  contactValidation(schemas.addSchema),
  ctrl.changeContact
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  contactValidation(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
