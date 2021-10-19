import 'reflect-metadata';
import 'class-validator';
import { InputType, Field } from 'type-graphql';
import { User } from '../../../models/user';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail({}, { message: 'E-mail must be an e-mail.' })
  email: string;

  @Field()
  password: string;
}
