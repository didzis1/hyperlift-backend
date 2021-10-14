import 'reflect-metadata';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
export class Routine {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Exercise])
  exercises: Exercise[];

  @Field(() => User)
  user: User;
}

@ObjectType()
export class Exercise {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  repetitions: number;

  @Field(() => Int)
  sets: number;
}
