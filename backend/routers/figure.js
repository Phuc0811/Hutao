import express from "express"
import { createFigure, deleteFigure, getAllFigure, getSingleFigure, updateFigure, getFigureBySearch, getFeaturedFigures, getFigureCount }from "../controllers/figureController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//tạo fingure
router.post("/",verifyAdmin, createFigure);
//sửa fingure
router.put("/:id",verifyAdmin, updateFigure);
//xóa fingure
router.delete("/:id",verifyAdmin, deleteFigure);
//Lấy ra theo ID fingure
router.get("/:id" , getSingleFigure);
//Lấy ra Tất cả fingure
router.get("/" , getAllFigure);
//Tìm fingure
router.get("/search/getFigureBySearch", getFigureBySearch);
//Tìm fingure sắp có
router.get("/search/getFeaturedFigures", getFeaturedFigures);
//Đếm tổng số sản phẩm trong DB
router.get("/search/getFigureCount", getFigureCount);



export default router;