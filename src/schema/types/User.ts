import 'reflect-metadata';
import { Field, ObjectType, ID } from 'type-graphql';
import { Routine } from './Routine';
@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field({ description: 'The username of the user' })
  username: string;

  @Field()
  email: string;

  @Field(() => [Routine], { nullable: true })
  routines?: Routine[];
}
