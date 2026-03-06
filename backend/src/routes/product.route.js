import {
  createProductController,
  deleteProductsController,
  getAllProductsController,
  updateProductController,
} from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

router.get("/products", getAllProductsController);
router.post("/products", createProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductsController);

export default router;
