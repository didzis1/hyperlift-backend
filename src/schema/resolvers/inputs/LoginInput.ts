import 'class-validator';
import { User } from '../../../models/user';
import { Field, InputType } from 'type-graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
