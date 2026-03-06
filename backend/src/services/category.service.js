import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../repositories/category.repository.js";

import { errorHandler } from "../middlewares/error.midllewares.js";

export const getCategoriesService = async () => {
  return await getCategories();
};

export const createCategoryService = async (name) => {
  return await createCategory(name);
};

export const updateCategoryService = async (id, data) => {
  const { name } = data;
  const results = await updateCategory(id, name);
  if (!results) {
    throw new errorHandler("Category not found", 404);
  }
  return results;
};

export const deleteCategoryService = async (id) => {
  const results = await deleteCategory(id);
  if (!results.affectedRows === 0) {
    throw new errorHandler("Category not found", 404);
  }
  return results;
};
