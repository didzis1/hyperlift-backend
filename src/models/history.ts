import { Field, ObjectType, Int, Float } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { Min } from 'class-validator';

@ObjectType()
export class ExerciseSets {
  @Field()
  @Property({ required: true })
  exerciseName: string;

  @Field(() => [HistorySets])
  @Property({ type: () => [HistorySets], required: true })
  historySets: HistorySets[];
}

@ObjectType()
export class HistorySets {
  @Field(() => Int)
  @Property({ required: true })
  set: number;

  @Field(() => Int)
  @Min(1, { message: 'At least one repetition is required' })
  @Property({ required: true })
  reps: number;

  @Field(() => Float, { nullable: true })
  @Property({ required: false })
  weight?: number;
}
@ObjectType()
export class History {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true })
  routineId: string;

  @Field()
  @Property({ required: true })
  splitName: string;

  @Field(() => [ExerciseSets])
  @Property({ type: () => [ExerciseSets], required: true })
  exercises: ExerciseSets[];

  @Field({ nullable: true })
  @Property({ required: false })
  notes?: string;

  @Field(() => Date)
  @Property()
  createdAt: Date;
}
