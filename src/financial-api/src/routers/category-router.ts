import * as express from "express";
import CategoryController from "../controllers/category-controller";

const CategoryRouter = express.Router();

CategoryRouter.route("/category").get(CategoryController.get);
CategoryRouter.route("/category/:id").get(CategoryController.getById);
CategoryRouter.route("/category/create").post(CategoryController.createCategory);
CategoryRouter.route("/category/:id").put(CategoryController.update);
CategoryRouter.route("/category/:id").delete(CategoryController.delete);

export default CategoryRouter;