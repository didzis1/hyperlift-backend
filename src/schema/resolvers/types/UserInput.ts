import { InputType, Field } from 'type-graphql';
import { User } from '../../../models/user';

@InputType()
export class NewUserInput implements Partial<User> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
