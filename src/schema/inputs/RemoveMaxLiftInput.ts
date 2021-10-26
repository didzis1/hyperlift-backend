import { Field, InputType } from 'type-graphql';

@InputType()
export class RemoveMaxLiftInput {
  @Field()
  id: string;
}
