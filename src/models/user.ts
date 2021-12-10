import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, ID, Int } from 'type-graphql';
import { IsEmail, Max, Min } from 'class-validator';
import { MaxLift } from './maxLift';
import { Routine } from './routine';
import { History } from './history';

enum LiftingType {
  Olympic = 'Olympic Weightlifting',
  Bodybuilding = 'Bodybuilding',
  Powerlifting = 'Powerlifting'
}
@ObjectType()
export class User {
  @Field(() => ID)
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  firstName: string;

  @Field()
  @Property({ required: true })
  lastName: string;

  @Field()
  @IsEmail({}, { message: 'Your email must be an actual email address' })
  @Property({ required: true, unique: true })
  email: string;

  @Field(() => Int, { nullable: true })
  @Min(12, { message: 'Age must be over twelve' })
  @Max(100, { message: 'Age cannot be over 100' })
  @Property({ required: false })
  age: number;

  @Field({ nullable: true })
  @Property({ required: false })
  liftingType: LiftingType;

  @Property({ required: true })
  password: string;

  @Field(() => [Routine])
  @Property({
    ref: Routine,
    required: false,
    default: []
  })
  routines: Routine[];

  @Field(() => [MaxLift])
  @Property({ type: () => [MaxLift], required: false, default: [] })
  maxLifts: MaxLift[];

  @Field(() => [History])
  @Property({ type: () => [History], required: false, default: [] })
  history: History[];
}

const UserModel = getModelForClass(User);

export default UserModel;
