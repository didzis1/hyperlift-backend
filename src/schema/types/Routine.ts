import 'reflect-metadata';
import { Field, ObjectType, ID, InputType } from 'type-graphql';
@ObjectType()
export class Routine {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [Workout], { nullable: true })
  workouts: Workout[];
}

@ObjectType()
export class Workout {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  exercises: string;
}

@InputType()
export class WorkoutInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  exercises: string;
}

// @InputType()
// export class ExerciseInput implements Partial<WorkoutInput> {
//   @Field(() => ID)
//   id: string;

//   @Field()
//   exercise: string;

//   @Field(() => Int)
//   reps: number;

//   @Field(() => Int)
//   sets: number;

//   @Field(() => Int, { nullable: true })
//   weight?: number;
// }
