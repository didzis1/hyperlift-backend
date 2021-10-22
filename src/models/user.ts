import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { MaxLift } from './maxLift';
import { Routine } from './routine';
@ObjectType()
export class User {
  @Field(() => ID)
  id: ObjectId;

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
  @Property({ type: () => [MaxLift], required: false })
  maxLifts: MaxLift[];
}

const UserModel = getModelForClass(User);

export default UserModel;
