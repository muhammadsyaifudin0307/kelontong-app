import {
  createCategoryService,
  getCategoriesService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category.service.js";

export const getCategoriesController = async (req, res) => {
  try {
    const data = await getCategoriesService();
    res.status(200).json({
      success: true,
      message: "Fetch data success",
      results: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createCategoryController = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await createCategoryService(name);
    res.status(201).json({
      success: true,
      message: "Create category success",
      results: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await updateCategoryService(id, req.body);
    res.status(200).json({
      success: true,
      message: "Update category success",
      results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCategoryService(id);
    res.status(200).json({
      success: true,
      message: "Delete category success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
