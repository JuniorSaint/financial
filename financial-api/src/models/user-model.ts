import * as mongoose from 'mongoose';

const PhoneSchema = new mongoose.Schema({
   phoneType: String, 
    phoneNumber: String, 
    social: String 
});

const UserSchema = new mongoose.Schema({
  name: String,
  phone: [PhoneSchema]  ,
  email: String,
  login: {
    type: String,
    lowercase: true ,
    trim: true
  },
  password: String,
  active:  Boolean,
  userKind: String

  },
{ timestamps: true ,
  versionKey: false
},
);

export default UserSchema;
