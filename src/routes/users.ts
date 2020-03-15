const express = require('express');
const Joi = require('@hapi/joi');
import {
    createValidator
} from 'express-joi-validation';

let router = express.Router();

const {
    getUser,
    getAutoSuggestUsers,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users');

const validator = createValidator();
const schema = Joi.object({
    id: Joi.string().required()
});

const bodySchema = Joi.object({
    id: Joi.string()
        .required(),
    login: Joi.string()
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]'))
        .required(),
    age: Joi.number()
        .integer()
        .min(4)
        .max(130)
        .required(),
    isDeleted: Joi.boolean()
        .required(),
});

router.get('/:id', validator.params(schema), getUser);
router.get('/', getAutoSuggestUsers);
router.post('/', validator.body(bodySchema), createUser);
router.put('/:id', validator.params(schema), validator.body(bodySchema), updateUser);
router.delete('/:id', validator.params(schema), deleteUser);

module.exports = router;
