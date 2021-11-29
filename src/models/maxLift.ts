import { ObjectType, Field, Float } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType()
export class MaxLift {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true })
  exercise: string;

  @Field(() => Float)
  @Property({ required: true })
  weight: number;

  @Field(() => [WeightHistory], { nullable: true })
  @Property({ type: () => [WeightHistory], default: [], required: false })
  weightHistory?: WeightHistory[];
}

@ObjectType()
export class WeightHistory {
  @Field(() => Float)
  @Property({ required: true })
  weight: number;

  @Field(() => Date)
  @Property({ required: true })
  date: Date;
}
