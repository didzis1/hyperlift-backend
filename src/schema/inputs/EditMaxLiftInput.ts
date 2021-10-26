import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class EditMaxLiftInput {
  @Field()
  id: string;

  @Field()
  exercise: string;

  @Field(() => Int)
  weight: number;
}
