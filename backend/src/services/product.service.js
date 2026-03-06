import { errorHandler } from "../middlewares/error.midllewares.js";
import {
  createProduct,
  deleteProducts,
  getAllProducts,
  getProductCode,
  updateProduct,
} from "../repositories/product.repository.js";

export const getAllProductsService = async () => {
  return await getAllProducts();
};

export const createProductService = async (data) => {
  const { product_code, name, category_id, cost_price, selling_price, stock } =
    data;

  // validate product code is same with exiting product code
  const extProductCode = await getProductCode(product_code);
  if (extProductCode) {
    throw new errorHandler("Product code already exists", 400);
  }

  return await createProduct(
    product_code,
    name,
    category_id,
    cost_price,
    selling_price,
    stock,
  );
};

export const updateProductService = async (id, data) => {
  const { product_code, name, category_id, cost_price, selling_price, stock } =
    data;

  const result = await updateProduct(
    id,
    product_code,
    name,
    category_id,
    cost_price,
    selling_price,
    stock,
  );

  if (!result) {
    throw new errorHandler("Product not found", 404);
  }
  return result;
};

export const deleteProductService = async (id) => {
  if (!id || Number(id) <= 0) {
    throw new errorHandler("Invalid product id", 400);
  }

  const results = await deleteProducts(id);
  if (!results.affectedRows) {
    throw new errorHandler("Product not found", 404);
  }

  return results;
};
