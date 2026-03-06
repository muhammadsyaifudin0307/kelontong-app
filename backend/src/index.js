import express from "express";
import cors from "cors";
import productsRoute from "./routes/product.route.js";
import categoriesRoute from "./routes/category.route.js";
import { errorHandler } from "./middlewares/error.midllewares.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", productsRoute);
app.use("/api", categoriesRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on  PORT", PORT);
});
