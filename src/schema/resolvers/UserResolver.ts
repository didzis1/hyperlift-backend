import 'reflect-metadata';
import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import UserModel, { User } from '../../models/user';
import { NewUserInput } from './types/UserInput';
import bcryptjs from 'bcryptjs';

@Resolver()
export class UserResolver {
  @Query(() => [User], { description: 'Fetch all users from the database' })
  async getUsers(): Promise<User[]> {
    const users = await UserModel.find({});

    if (!users) throw new Error('Error while fetching users');

    return users;
  }

  @Query(() => User)
  async findUserByEmail(@Arg('email') email: string) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error(`Cannot find user with ${email} email address`);
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('userInput') { firstName, lastName, email, password }: NewUserInput
  ): Promise<User> {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    const savedUser = await user.save();

    if (!savedUser) throw new Error('User could not been saved...');

    return savedUser;
  }
}
