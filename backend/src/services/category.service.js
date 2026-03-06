import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../repositories/category.repository.js";

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
    throw new Error("Category not found");
  }
  return results;
};

export const deleteCategoryService = async (id) => {
  const results = await deleteCategory(id);
  if (!results.affectedRows === 0) {
    throw new Error("Category not found");
  }
  return results;
};
