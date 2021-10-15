import 'reflect-metadata';
import { Resolver, Mutation, Query, Arg } from 'type-graphql';
import UserModel from '../../models/user';
import bcryptjs from 'bcryptjs';
import { User } from '../types/User';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getUsers() {
    const users = await UserModel.find({});

    if (!users) throw new Error('Error while fetching users');

    return users;
  }

  @Query(() => User)
  async findUserByUsername(@Arg('username') username: string) {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error('User not found');
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('username') username: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
      routines: []
    });

    const savedUser = await user.save();

    if (!savedUser) throw new Error('User could not been saved...');

    return savedUser;
  }
}
