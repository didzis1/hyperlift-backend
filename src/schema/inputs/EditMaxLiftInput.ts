import { Field, InputType, Float } from 'type-graphql';

@InputType()
export class EditMaxLiftInput {
  @Field()
  id: string;

  @Field()
  exercise: string;

  @Field(() => Float)
  weight: number;
}
