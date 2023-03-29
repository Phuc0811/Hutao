import express from 'express'
import { updateUser,deleteUser, getSingleUser, getAllUser } from '../controllers/userController.js';
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


//sửa fingure
router.put("/:id" ,verifyUser, updateUser);
//xóa fingure
router.delete("/:id",verifyUser, deleteUser);
//Lấy ra theo ID fingure
router.get("/:id" ,verifyUser, getSingleUser);
//Lấy ra Tất cả fingure
router.get("/" ,verifyUser,verifyAdmin, getAllUser);

export default router;