import { Field, InputType, Int } from 'type-graphql';
import { LiftingType } from '../../types/LiftingType';

@InputType()
export class ProfileInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  age: number;

  @Field()
  liftingType: LiftingType;
}
