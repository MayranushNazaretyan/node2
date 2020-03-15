const express = require('express');
let router = express.Router();
const {
    getUser,
    getAutoSuggestUsers,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users');


router.get('/:id', getUser);
router.get('/', getAutoSuggestUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
