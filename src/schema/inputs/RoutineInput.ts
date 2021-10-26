import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class NewRoutineInput {
  @Field({ nullable: true })
  description?: string;

  @Field(() => [NewWorkoutSplitInput])
  workouts: NewWorkoutSplitInput[];
}

@InputType()
export class NewWorkoutSplitInput {
  @Field()
  name: string;

  @Field(() => [NewExerciseInput])
  exercises: NewExerciseInput[];
}

@InputType()
export class NewExerciseInput {
  @Field()
  exerciseName: string;

  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  sets: number;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
