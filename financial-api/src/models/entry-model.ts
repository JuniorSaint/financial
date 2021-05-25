import * as mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    typeEntry: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    dateLaunch: {
        type: String,        
    },
    paid: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }

},
{   timestamps: true,
    versionKey: false
}
);

export default EntrySchema;