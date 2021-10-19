import { InputType, Field, Int } from 'type-graphql';
import { Exercise, Routine, WorkoutSplit } from '../../../models/routine';

@InputType()
export class NewRoutineInput implements Partial<Routine> {
  @Field({ nullable: true })
  description?: string;

  @Field(() => [NewWorkoutSplitInput])
  workouts: NewWorkoutSplitInput[];
}

@InputType()
export class NewWorkoutSplitInput implements Partial<WorkoutSplit> {
  @Field()
  name: string;

  @Field(() => [NewExerciseInput])
  exercises: NewExerciseInput[];
}

@InputType()
export class NewExerciseInput implements Partial<Exercise> {
  @Field()
  exerciseName: string;

  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  sets: number;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
