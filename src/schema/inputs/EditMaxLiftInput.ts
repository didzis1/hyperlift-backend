import { Field, InputType, Float } from 'type-graphql';

@InputType()
export class EditMaxLiftInput {
  @Field()
  id: string;

  @Field(() => Float)
  weight: number;

  @Field(() => Date)
  date: Date;
}
