import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  updateProductService,
} from "../services/product.service.js";

export const getAllProductsController = async (req, res) => {
  try {
    const data = await getAllProductsService();
    res.status(200).json({
      success: true,
      message: "Data berhasil di load",
      results: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createProductController = async (req, res) => {
  try {
    const results = await createProductService(req.body);
    return res.status(201).json({
      success: true,
      message: "Create product success",
      results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await updateProductService(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Update product success",
      results,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteProductsController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteProductService(id);
    res.status(200).json({
      success: true,
      message: "Delete products success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
