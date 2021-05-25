import * as mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
},
{
    versionKey: false
}
);

export default CategorySchema;