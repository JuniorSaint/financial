import * as mongoose from "mongoose";
import CategorySchema from "../models/category-model";

export default mongoose.model('category', CategorySchema);