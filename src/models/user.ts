import mongoose from 'mongoose';
import { RoutineType } from './routine';

export type User = {
  username: string;
  name: string;
  password: string;
  routines?: RoutineType[];
};

const userSchema = new mongoose.Schema<User>({
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

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
