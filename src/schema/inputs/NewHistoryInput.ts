import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class NewSetsData {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Int)
  weight: number;
}
@InputType()
export class NewExerciseSetsInput {
  @Field()
  exerciseName: string;

  @Field(() => [NewSetsData])
  setsData: NewSetsData[];
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
