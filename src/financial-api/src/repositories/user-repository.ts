import * as mongoose from "mongoose";
import UserSchema from "../models/user-model";

export default mongoose.model('user', UserSchema);