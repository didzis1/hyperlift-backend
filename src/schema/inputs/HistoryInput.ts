import { Field, Float, InputType, Int } from 'type-graphql';

@InputType()
export class NewHistoryInput {
  @Field()
  routineId: string;

  @Field()
  splitName: string;

  @Field(() => [ExerciseInput])
  exercises: ExerciseInput[];

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class ExerciseInput {
  @Field()
  exerciseName: string;

  @Field(() => [VolumeSetsInput])
  volumeSets: VolumeSetsInput[];
}

@InputType()
export class VolumeSetsInput {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Float, { nullable: true })
  weight?: number;
}

@InputType()
export class EditHistoryInput {
  @Field()
  id: string;

  @Field()
  splitName: string;

  @Field(() => [EditExerciseInput])
  exercises: EditExerciseInput[];

  @Field({ nullable: true })
  notes?: string;
}

@InputType()
export class EditExerciseInput {
  @Field()
  exerciseName: string;

  @Field(() => [EditVolumeSetsInput])
  volumeSets: EditVolumeSetsInput[];
}

@InputType()
export class EditVolumeSetsInput {
  @Field(() => Int)
  reps: number;

  @Field(() => Int)
  set: number;

  @Field(() => Float, { nullable: true })
  weight?: number;
}
