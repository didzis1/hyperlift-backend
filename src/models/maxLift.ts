import { ObjectId } from 'mongoose';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import { getModelForClass, prop as Property } from '@typegoose/typegoose';

@ObjectType()
export class MaxLift {
  @Field(() => ID)
  id: ObjectId;

  @Field()
  @Property({ required: true })
  exercise: string;

  @Field(() => Int)
  @Property({ required: true })
  weight: number;
}

const MaxLiftsModel = getModelForClass(MaxLift);

export default MaxLiftsModel;
