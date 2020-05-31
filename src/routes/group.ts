import express from 'express';
import {
    getGroup,
    getGroups,
    createGroup,
    updateGroup,
    deleteGroup,
} from '../services/group';
import { AuthorizeHeader } from '../services/auth';

const router = express.Router();

router.get('/:id', AuthorizeHeader, getGroup);
router.get('/', AuthorizeHeader, getGroups);
router.post('/', AuthorizeHeader, createGroup);
router.put('/:id', AuthorizeHeader, updateGroup);
router.delete('/:id', AuthorizeHeader, deleteGroup);

export const groupRouts = router;
