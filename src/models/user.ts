import mongoose from 'mongoose';
import { RoutineSchemaType } from './routine';

export type UserSchemaType = {
  id: string;
  username: string;
  name: string;
  password: string;
  routines?: RoutineSchemaType[];
};

const userSchema = new mongoose.Schema<UserSchemaType>({
  username: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  routines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Routine'
    }
  ]
});

const UserModel = mongoose.model<UserSchemaType>('User', userSchema);

export default UserModel;
