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

router.get('/:id', validator.params(schema), getUser);
router.get('/', getAutoSuggestUsers);
router.post('/', validator.body(bodySchema), createUser);
router.put('/:id', validator.params(schema), validator.body(bodySchema), updateUser);
router.delete('/:id', validator.params(schema), deleteUser);
router.post('/upload', upload);

export const usersRouts = router;
