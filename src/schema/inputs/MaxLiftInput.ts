import { Field, Float, InputType } from 'type-graphql';

@InputType()
export class NewMaxLiftInput {
  @Field()
  exercise: string;

  @Field(() => Float)
  weight: number;
}

@InputType()
export class EditMaxLiftInput {
  @Field()
  id: string;

  @Field(() => Float)
  weight: number;

  @Field(() => Date)
  date: Date;
}

@InputType()
export class RemoveMaxLiftInput {
  @Field()
  id: string;
}
