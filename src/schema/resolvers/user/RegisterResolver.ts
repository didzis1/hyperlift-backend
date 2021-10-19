import UserModel, { User } from '../../../models/user';
import { Resolver, Mutation, Arg } from 'type-graphql';
import { RegisterInput } from '../inputs/RegisterInput';
import bcryptjs from 'bcryptjs';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('registerInput')
    { firstName, lastName, email, password }: RegisterInput
  ): Promise<User> {
    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    const savedUser = await user.save();

    if (!savedUser)
      throw new Error('An error occured while trying to register the user...');

    return savedUser;
  }
}
