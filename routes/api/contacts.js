const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/validation");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");
const { isValidId } = require("../../middlewares/isValidId");
const authenticate = require("../../middlewares/authenticate");

router.get("/", authenticate, ctrl.getAllContacts);
router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);
router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
