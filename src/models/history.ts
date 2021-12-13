import { Field, ObjectType, Int, Float } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { Min } from 'class-validator';

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

  @Field(() => [HistoryExercise])
  @Property({ type: () => [HistoryExercise], required: true })
  exercises: HistoryExercise[];

  @Field({ nullable: true })
  @Property({ required: false })
  notes?: string;

  @Field(() => Date)
  @Property()
  createdAt: Date;
}

@ObjectType()
export class HistoryExercise {
  @Field()
  @Property({ required: true })
  exerciseName: string;

  @Field(() => [VolumeSets])
  @Property({ type: () => [VolumeSets], required: true })
  volumeSets: VolumeSets[];
}

@ObjectType()
export class VolumeSets {
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
