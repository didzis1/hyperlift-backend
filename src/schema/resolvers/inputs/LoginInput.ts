import 'reflect-metadata';
import { User } from '../../../models/user';
import { Field, InputType } from 'type-graphql';

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}
