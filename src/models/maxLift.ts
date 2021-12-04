import { ObjectType, Field, Float } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';
import { Min } from 'class-validator';

@ObjectType()
export class MaxLift {
  @Field()
  @Property()
  id: string;

  @Field()
  @Property({ required: true, unique: true })
  exercise: string;

  @Field(() => Float)
  @Min(1, { message: 'Weight must be over 1 kg/lb' })
  @Property({ required: true })
  weight: number;

  @Field(() => [WeightHistory], { nullable: true })
  @Property({ type: () => [WeightHistory], default: [], required: false })
  weightHistory?: WeightHistory[];
}

@ObjectType()
export class WeightHistory {
  @Field(() => Float)
  @Min(1, { message: 'Weight must be over 1 kg/lb' })
  @Property({ required: true })
  weight: number;

  @Field(() => Date)
  @Property({ required: true })
  date: Date;
}
