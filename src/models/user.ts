import mongoose, { ObjectId } from 'mongoose';
import { RoutineInterface } from './routine';

export interface UserInterface {
  id: ObjectId;
  username: string;
  email: string;
  password: string;
  routines?: RoutineInterface[];
}

const userSchema = new mongoose.Schema<UserInterface>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  routines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Routine'
    }
  ]
});

const UserModel = mongoose.model<UserInterface>('User', userSchema);

export default UserModel;
