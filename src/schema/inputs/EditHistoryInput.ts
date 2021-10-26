import { Field, InputType } from 'type-graphql';
import { NewWorkoutSplitInput } from './RoutineInput';

@InputType()
export class EditHistoryInput {
  @Field()
  id: string;

  @Field()
  workout: NewWorkoutSplitInput;
}
