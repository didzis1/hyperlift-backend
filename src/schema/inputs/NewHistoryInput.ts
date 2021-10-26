import { InputType, Field } from 'type-graphql';
import { NewWorkoutSplitInput } from './RoutineInput';

@InputType()
export class NewHistoryInput {
  @Field()
  workout: NewWorkoutSplitInput;

  @Field()
  routineId: string;
}
