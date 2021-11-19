import { ObjectType, Field, Float } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType()
export class MaxLift {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true })
  exercise: string;

  @Field(() => Float)
  @Property({ required: true })
  weight: number;
}
