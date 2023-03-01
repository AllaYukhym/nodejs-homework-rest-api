const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/validation");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares/isValidId");

router.get("/", ctrl.getAllContacts);
router.get("/:contactId", isValidId, ctrl.getContactById);
router.post("/", validateBody(schemas.addSchema), ctrl.addContact);
router.delete("/:contactId", isValidId, ctrl.deleteContact);
router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
