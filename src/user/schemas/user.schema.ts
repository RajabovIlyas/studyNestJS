import  { Schema,model  } from 'mongoose';
import { roleEnum } from '../enums/role.enum';
import { IUser } from '../interfaces/user.interface';

export const UserSchema: Schema = new Schema({
  name: {type:String, required: true},
  surname: {type:String, required: true},
  email: {type:String, required: true},
  password: {type:String, required: true},
  role:{type:String,required:true,enum:Object.values(roleEnum)}
});

UserSchema.index({email:1},{unique:true})

export default model <IUser>('User', UserSchema);