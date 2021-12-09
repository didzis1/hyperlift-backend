import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class NewRoutineInput {
  @Field()
  description: string;

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
  // @Field(() => [NewSetsDataInput])
  // setsData: NewSetsDataInput[];
}

// @InputType()
// export class NewSetsDataInput {
//   @Field(() => Int)
//   reps: number;

//   @Field(() => Int)
//   set: number;

//   @Field(() => Float, { nullable: true })
//   weight?: number;
// }
