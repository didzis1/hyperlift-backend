import mongoose from 'mongoose';
import { UserInterface } from './user';
export interface RoutineInterface {
  id: string;
  title: string;
  workouts?: WorkoutInterface[];
  user: UserInterface;
}

export interface WorkoutInterface {
  id: string;
  exercise: string;
  reps: number;
  sets: number;
}

const routineSchema = new mongoose.Schema<RoutineInterface>({
  title: { type: String, required: true },
  workouts: { type: Array, required: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const RoutineModel = mongoose.model<RoutineInterface>('Routine', routineSchema);

export default RoutineModel;
