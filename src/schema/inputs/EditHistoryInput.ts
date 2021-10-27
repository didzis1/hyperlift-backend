import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class EditSetsData {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Int, { nullable: true })
  weight?: number;
}
@InputType()
export class EditExerciseSetsInput {
  @Field()
  exerciseName: string;

  @Field(() => [EditSetsData])
  setsData: EditSetsData[];
}

@InputType()
export class EditHistoryInput {
  @Field()
  id: string;

  @Field()
  splitName: string;

  @Field(() => [EditExerciseSetsInput])
  exercises: EditExerciseSetsInput[];
}
