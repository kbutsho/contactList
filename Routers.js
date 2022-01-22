const router = require('express').Router();
const { getAllContacts, createContact, getContactById, updateContactById, deleteContactById } = require('./Controller');

router.get('/', getAllContacts);
router.get('/:id',getContactById);
router.post('/', createContact);
router.put('/:id',updateContactById);
router.delete('/:id',deleteContactById);

module.exports = router;