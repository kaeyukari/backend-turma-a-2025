import express from 'express';
const router = express.Router();

import {getUsers} from '../controllers/userControllerMySQL.js'

router.get('/mysql/users', getUsers);
// router.deleuserControllerLocal.jste('/user/:id', deleteUser);
// router.patch('/user/:id', updateUser);
// router.patch('/user/role/:id', updateUserRole);


export default router;