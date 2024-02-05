const express = require('express');
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require('../controller/contactController');

// router.route("/").get(getContacts)
// router.route("/").post(createContact);

// We can combine above two lines as follows:
router.route("/").get(getContacts).post(createContact);

// Same for the below
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;