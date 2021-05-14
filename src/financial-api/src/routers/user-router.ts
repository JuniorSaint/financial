import * as express from "express";
import userController from "../controllers/user-controller";
import UserController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route("/user").get(UserController.get);
userRouter.route("/user/:id").get(UserController.getById);
userRouter.route("/user/create").post(UserController.createUser);
userRouter.route("/user/:id").put(UserController.update);
userRouter.route("/user/:id").delete(UserController.delete);
userRouter.route("/user/procura/:search").get(userController.getBySearch)


export default userRouter;