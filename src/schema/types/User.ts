import 'reflect-metadata';
import { IsEmail, Length } from 'class-validator';
import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { Routine } from './Routine';
@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field(() => [Routine], { nullable: true })
  routines?: Routine[];
}

@InputType()
export class NewUserInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
