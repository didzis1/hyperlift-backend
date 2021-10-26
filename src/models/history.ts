import { Field, ObjectType } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { WorkoutSplit } from './routine';

@ObjectType()
export class History {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true })
  routineId: string;

  @Field(() => WorkoutSplit)
  @Property({ type: () => WorkoutSplit, required: true })
  workout: WorkoutSplit;

  @Field(() => Date)
  @Property()
  createdAt: Date;
}
