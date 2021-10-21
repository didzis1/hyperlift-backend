import { ObjectId } from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { prop as Property, getModelForClass, Ref } from '@typegoose/typegoose';
import { Routine, WorkoutSplit } from './routine';

@ObjectType()
export class History {
  @Field(() => ID)
  id: ObjectId;

  @Field(() => Routine)
  @Property({ ref: () => Routine, required: true })
  routine: Ref<Routine>;

  @Field(() => WorkoutSplit)
  @Property({ type: () => WorkoutSplit, required: true })
  workout: WorkoutSplit;

  // @Field(() => Date)
  // @Property({ required: true, default: Date.now() })
  // createdAt: Date;
}

const HistoryModel = getModelForClass(History);

export default HistoryModel;
