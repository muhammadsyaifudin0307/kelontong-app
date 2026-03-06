import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  updateProductService,
} from "../services/product.service.js";

export const getAllProductsController = async (req, res, next) => {
  try {
    const data = await getAllProductsService();
    res.status(200).json({
      success: true,
      message: "Fetch products success",
      results: data,
    });
  } catch (error) {
    next(error);
  }
};

export const createProductController = async (req, res, next) => {
  try {
    const results = await createProductService(req.body);
    return res.status(201).json({
      success: true,
      message: "Create product success",
      results,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await updateProductService(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update product success",
      results,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteProductsController = async (req, res, next) => {
  const { id } = req.params;

  try {
    await deleteProductService(id);
    res.status(200).json({
      success: true,
      message: "Delete products success",
    });
  } catch (error) {
    next(error);
  }
};
