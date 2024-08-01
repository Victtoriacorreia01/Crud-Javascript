import express from 'express';
import { addUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/', addUser); 
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser); 

export default router;
