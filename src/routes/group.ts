import express from 'express';
import {
    getGroup,
    getGroups,
    createGroup,
    updateGroup,
    deleteGroup,
} from '../services/group';

const router = express.Router();

router.get('/:id', getGroup);
router.get('/', getGroups);
router.post('/', createGroup);
router.put('/:id', updateGroup);
router.delete('/:id', deleteGroup);

export const groupRouts = router;
