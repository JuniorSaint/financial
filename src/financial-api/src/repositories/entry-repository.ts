import * as mongoose from "mongoose";
import EntrySchema from "../models/entry-model";

export default mongoose.model('entry', EntrySchema);