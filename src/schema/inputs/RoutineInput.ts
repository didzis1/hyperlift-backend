import { ObjectId } from 'mongoose';
import { InputType, Field, Int, ID } from 'type-graphql';

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
}

@InputType()
export class EditRoutineInput extends NewRoutineInput {
  @Field(() => ID)
  _id: ObjectId;
}

@InputType()
export class DeleteRoutineInput {
  @Field(() => ID)
  _id: ObjectId;
}
