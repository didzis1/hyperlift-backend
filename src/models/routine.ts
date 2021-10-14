import mongoose from 'mongoose';
import { UserSchemaType } from './user';

export type ExerciseSchemaType = {
  id: string;
  name: string;
  repetitions: number;
  sets: number;
};

export type RoutineSchemaType = {
  id: string;
  name: string;
  exercises: ExerciseSchemaType[];
  user: UserSchemaType;
};

const routineSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  exercises: { type: 'array', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const RoutineModel = mongoose.model<RoutineSchemaType>(
  'Routine',
  routineSchema
);

module.exports = RoutineModel;
