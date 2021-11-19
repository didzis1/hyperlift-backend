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
