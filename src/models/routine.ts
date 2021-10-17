import mongoose from 'mongoose';
import { UserInterface } from './user';
export interface RoutineInterface {
  id: string;
  title: string;
  description?: string;
  workouts: WorkoutInterface[];
  user: UserInterface;
}

export interface WorkoutInterface {
  id: string;
  name: string;
  exercises: string;
}

// export interface ExerciseInterface {
//   id: string;
//   exercise: string;
//   reps: number;
//   sets: number;
//   weight?: number;
// }

const routineSchema = new mongoose.Schema<RoutineInterface>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  workouts: [{ type: Array, required: true }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const RoutineModel = mongoose.model<RoutineInterface>('Routine', routineSchema);

export default RoutineModel;
