import { Field, ObjectType } from 'type-graphql';
import { prop as Property, Ref } from '@typegoose/typegoose';
import { Routine, WorkoutSplit } from './routine';

@ObjectType()
export class History {
  @Field(() => Routine)
  @Property({ ref: () => Routine, required: true })
  routine: Ref<Routine>;

  @Field(() => WorkoutSplit)
  @Property({ type: () => WorkoutSplit, required: true })
  workout: WorkoutSplit;

  @Field(() => Date)
  createdAt: Date;
}
