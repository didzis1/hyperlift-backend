import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class NewMaxLiftInput {
  @Field()
  exercise: string;

  @Field(() => Int)
  weight: number;
}
