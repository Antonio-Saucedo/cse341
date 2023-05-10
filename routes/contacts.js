const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getAllData);

// GET contact by id
router.get('/:id', contactsController.getDataById);

// POST/Create contact
router.post('/', contactsController.createContact);

// PUT/Update contact by id
router.put('/:id', contactsController.updateContact);

// DELETE contact by id
router.delete('/:id', contactsController.deleteContact);

// localhost:8080/contacts/
module.exports = router;
