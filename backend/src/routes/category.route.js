import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  updateCategoryController,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/categories", getCategoriesController);
router.post("/categories", createCategoryController);
router.patch("/categories/:id", updateCategoryController);
router.delete("/categories/:id", deleteCategoryController);

export default router;
