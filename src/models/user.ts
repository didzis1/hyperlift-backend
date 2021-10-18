import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ObjectType, ID } from 'type-graphql';
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
  @Property({ required: true, unique: true })
  email: string;

  @Property({ required: true })
  password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
