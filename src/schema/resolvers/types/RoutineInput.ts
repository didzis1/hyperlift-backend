import { ObjectId } from 'mongoose';
import { InputType, Field, ID } from 'type-graphql';
import { Routine, WorkoutSplit } from '../../../models/routine';

@InputType()
export class NewRoutineInput implements Partial<Routine> {
  @Field()
  description?: string;

  @Field(() => [WorkoutSplit])
  workouts: WorkoutSplit[];
}
