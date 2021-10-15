import 'reflect-metadata';
import { Field, ObjectType, Int, ID } from 'type-graphql';
@ObjectType()
export class Routine {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [Workout], { nullable: true })
  workouts?: Workout[];
}

@ObjectType()
export class Workout {
  @Field(() => ID)
  id: string;

  @Field()
  exercise: string;

  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  sets: number;
}
