import mongoose from 'mongoose';
import { User } from './user';

export type ExercisesType = {
  name: string;
  repetitions: number;
  sets: number;
};

export type RoutineType = {
  name: string;
  exercises: ExercisesType[];
  user: User;
};

const routineSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  exercises: { type: 'array', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const RoutineModel = mongoose.model<RoutineType>('Routine', routineSchema);

module.exports = RoutineModel;
