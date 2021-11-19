import { Field, InputType, Float } from 'type-graphql';

@InputType()
export class NewMaxLiftInput {
  @Field()
  exercise: string;

  @Field(() => Float)
  weight: number;
}
