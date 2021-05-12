import * as express from "express";
import EntryController from "../controllers/entry-controller";

const EntryRouter = express.Router();

EntryRouter.route("/entry").get(EntryController.get);
EntryRouter.route("/entry/:id").get(EntryController.getById);
EntryRouter.route("/entry/create").post(EntryController.createEntry);
EntryRouter.route("/entry/:id").put(EntryController.update);
EntryRouter.route("/entry/:id").delete(EntryController.delete);
EntryRouter.route("/entry/dateLaunch/:dateIn/:dateEnd").get(EntryController.getByDate);
EntryRouter.route("/entry/byEntry/entryList").get(EntryController.getByEntry);


export default EntryRouter;