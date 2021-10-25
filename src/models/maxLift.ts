import { ObjectType, Field, Int } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType()
export class MaxLift {
  @Field()
  @Property({ required: true })
  exercise: string;

  @Field(() => Int)
  @Property({ required: true })
  weight: number;
}
