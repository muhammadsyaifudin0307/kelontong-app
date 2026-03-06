import {
  createCategoryService,
  getCategoriesService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/category.service.js";

// import { errorHandler } from "../middlewares/error.midllewares.js";

export const getCategoriesController = async (req, res, next) => {
  try {
    const data = await getCategoriesService();
    res.status(200).json({
      success: true,
      message: "Fetch data success",
      results: data,
    });
  } catch (error) {
    next(error);
  }
};

export const createCategoryController = async (req, res, next) => {
  const { name } = req.body;
  try {
    const data = await createCategoryService(name);
    res.status(201).json({
      success: true,
      message: "Create category success",
      results: data,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await updateCategoryService(id, req.body);
    res.status(200).json({
      success: true,
      message: "Update category success",
      results,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteCategoryService(id);
    res.status(200).json({
      success: true,
      message: "Delete category success",
    });
  } catch (error) {
    next(error);
  }
};
