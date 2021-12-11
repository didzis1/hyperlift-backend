import { Field, Float, InputType, Int } from 'type-graphql';

@InputType()
export class EditSetsData {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Float, { nullable: true })
  weight?: number;
}
@InputType()
export class EditExerciseSetsInput {
  @Field()
  exerciseName: string;

  @Field(() => [EditSetsData])
  historySets: EditSetsData[];
}

@InputType()
export class EditHistoryInput {
  @Field()
  id: string;

  @Field()
  splitName: string;

  @Field(() => [EditExerciseSetsInput])
  exercises: EditExerciseSetsInput[];

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class NewHistorySetsInput {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Float)
  weight: number;
}

@InputType()
export class NewExerciseSetsInput {
  @Field()
  exerciseName: string;

  @Field(() => [NewHistorySetsInput])
  historySets: NewHistorySetsInput[];
}

@InputType()
export class NewHistoryInput {
  @Field()
  routineId: string;

  @Field()
  splitName: string;

  @Field(() => [NewExerciseSetsInput])
  exercises: NewExerciseSetsInput[];

  @Field({ nullable: true })
  notes?: string;
}
