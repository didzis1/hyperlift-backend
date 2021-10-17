import 'reflect-metadata';
import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import UserModel from '../../models/user';
import bcryptjs from 'bcryptjs';
import { NewUserInput, User } from '../types/User';

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
    if (!user) throw new Error('User not found');
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
      password: hashedPassword,
      routines: []
    });

    const savedUser = await user.save();

    if (!savedUser) throw new Error('User could not been saved...');

    return savedUser;
  }

  // @Mutation(() => User)
  // async removeUser(@Arg('email') email: string): Promise<boolean> {
  //   try {
  //     await UserModel.findOneAndRemove({ email });
  //   } catch (error) {
  //     throw new Error('Error while trying to delete the user...');
  //   }

  //   return true;
  // }
}
