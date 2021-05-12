import * as express from "express";
import UserController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route("/user").get(UserController.get);
userRouter.route("/user/:id").get(UserController.getById);
userRouter.route("/user/create").post(UserController.createUser);
userRouter.route("/user/:id").put(UserController.update);
userRouter.route("/user/:id").delete(UserController.delete);



export default userRouter;