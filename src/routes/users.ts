import express from 'express';
import Joi from '@hapi/joi';
import { createValidator } from 'express-joi-validation';
import {
    getUser,
    getAutoSuggestUsers,
    createUser,
    updateUser,
    deleteUser,
    upload,
} from '../services/users';
import { AuthorizeHeader } from '../services/auth'

const validator = createValidator();
const schema = Joi.object({
    id: Joi.string().required()
});

const bodySchema = Joi.object({
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

const router = express.Router();

router.get('/:id', validator.params(schema), AuthorizeHeader, getUser);
router.get('/', AuthorizeHeader, getAutoSuggestUsers);
router.post('/', validator.body(bodySchema), AuthorizeHeader, createUser);
router.put('/:id', validator.params(schema), validator.body(bodySchema), AuthorizeHeader, updateUser);
router.delete('/:id', validator.params(schema), AuthorizeHeader, deleteUser);
router.post('/upload', AuthorizeHeader, upload);

export const usersRouts = router;
