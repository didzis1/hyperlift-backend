import UserModel, { User } from '../../../models/user';
import { Resolver, Mutation, Arg } from 'type-graphql';
import { RegisterInput } from '../../inputs/RegisterInput';
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

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) throw new Error('E-mail is already in use');

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    let savedUser;

    try {
      savedUser = await user.save();
    } catch (error) {
      throw new Error('Something went wrong while trying to register');
    }

    return savedUser;
  }
}
