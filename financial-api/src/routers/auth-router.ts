import * as express from "express";
import AuthController from "../controllers/auth-controller";

const userRouter = express.Router();

userRouter.route("/auth/login").post(AuthController.login);
// userRouter.route("/user/:id").get(AuthController.getById);
// userRouter.route("/user").post(AuthController.create);
// userRouter.route("/user/:id").put(AuthController.update);
// userRouter.route("/user/:id").delete(AuthController.delete);
// userRouter.route("/user/email/list").get(AuthController.getByEmail);

export default userRouter;