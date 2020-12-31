import  { Schema,Document,model  } from 'mongoose';
import { roleEnum } from '../enums/role.enum';

export interface IUser extends Document {
  readonly name: string;
  readonly surname: string;
  readonly email:string;
  readonly password:string;
  readonly role:string;
}

export const UserSchema: Schema = new Schema({
  name: {type:String, required: true},
  surname: {type:String, required: true},
  email: {type:String, required: true},
  password: {type:String, required: true},
  role:{type:String,required:true,enum:Object.values(roleEnum)}
});

UserSchema.index({email:1},{unique:true})

export default model <IUser>('User', UserSchema);